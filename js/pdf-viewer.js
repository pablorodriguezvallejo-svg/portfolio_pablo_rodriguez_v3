/* =========================================================
   PDF VIEWER
   Standalone version
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".pdf-viewer").forEach((viewer) => {
    const pdfUrl = viewer.dataset.pdf;

    if (!pdfUrl) return;

    setupPDFViewer(viewer, pdfUrl);
  });
});


async function setupPDFViewer(wrapper, url) {

  wrapper.innerHTML = `
    <div class="pdf-stage">

      <div class="pdf-loading">
        LOADING PDF / 00%
      </div>

      <div class="pdf-spread"></div>

    </div>

    <div class="pdf-controls">

      <button
        type="button"
        class="pdf-prev"
        aria-label="Previous pages"
      >
        ←
      </button>

      <span class="pdf-page">
        01 / 01
      </span>

      <button
        type="button"
        class="pdf-next"
        aria-label="Next pages"
      >
        →
      </button>

    </div>
  `;


  const stage = wrapper.querySelector(".pdf-stage");
  const spread = wrapper.querySelector(".pdf-spread");
  const loading = wrapper.querySelector(".pdf-loading");

  const prev = wrapper.querySelector(".pdf-prev");
  const next = wrapper.querySelector(".pdf-next");
  const pageIndicator = wrapper.querySelector(".pdf-page");


  if (
    !stage ||
    !spread ||
    !loading ||
    typeof pdfjsLib === "undefined"
  ) {
    loading.textContent = "PDF.JS NOT AVAILABLE";
    return;
  }


  let pdf = null;
  let currentSpread = 0;
  let rendering = false;
  let queuedSpread = null;


  /* ---------------------------------------------------------
     SPREADS

     Page 1 alone
     Page 2 + 3
     Page 4 + 5
     Page 6 + 7
     etc.
     --------------------------------------------------------- */

  function getSpreads(totalPages) {

    const result = [];

    if (!totalPages) return result;


    // Cover
    result.push([1]);


    let page = 2;


    while (page <= totalPages) {

      if (page + 1 <= totalPages) {

        result.push([
          page,
          page + 1
        ]);

        page += 2;

      } else {

        result.push([page]);

        page += 1;
      }
    }


    return result;
  }


  /* ---------------------------------------------------------
     QUEUE
     --------------------------------------------------------- */

  function queueSpread(index) {

    if (rendering) {
      queuedSpread = index;
      return;
    }

    renderSpread(index);
  }


  /* ---------------------------------------------------------
     RENDER SPREAD
     --------------------------------------------------------- */

  async function renderSpread(spreadIndex) {

    if (!pdf) return;


    rendering = true;

    loading.style.display = "flex";


    try {

      const spreads = getSpreads(pdf.numPages);

      const pages = spreads[spreadIndex];

      if (!pages) return;


      spread.innerHTML = "";


      const pageData = [];


      /*
       * Load the required pages
       */

      for (const pageNumber of pages) {

        const page = await pdf.getPage(pageNumber);

        pageData.push({
          page,
          baseViewport: page.getViewport({
            scale: 1
          })
        });

      }


      /*
       * Available space
       */

      const availableWidth =
        Math.max(300, stage.clientWidth - 30);

      const availableHeight =
        Math.max(300, stage.clientHeight - 30);


      /* -----------------------------------------------------
         SINGLE PAGE
         ----------------------------------------------------- */

      if (pages.length === 1) {

        const item = pageData[0];


        const scale = Math.min(
          availableWidth / item.baseViewport.width,
          availableHeight / item.baseViewport.height
        );


        const viewport =
          item.page.getViewport({
            scale
          });


        const canvas =
          await createPDFCanvas(
            viewport,
            item.page
          );


        spread.classList.add("single");
        spread.classList.remove("double");

        spread.appendChild(canvas);

      }


      /* -----------------------------------------------------
         DOUBLE PAGE
         ----------------------------------------------------- */

      else {

        const gap = 10;


        const scaleByWidth =
          (availableWidth - gap) /
          (
            pageData[0].baseViewport.width +
            pageData[1].baseViewport.width
          );


        const scaleByHeight =
          availableHeight /
          Math.max(
            pageData[0].baseViewport.height,
            pageData[1].baseViewport.height
          );


        const scale =
          Math.min(
            scaleByWidth,
            scaleByHeight
          );


        spread.classList.add("double");
        spread.classList.remove("single");


        for (const item of pageData) {

          const viewport =
            item.page.getViewport({
              scale
            });


          const canvas =
            await createPDFCanvas(
              viewport,
              item.page
            );


          spread.appendChild(canvas);
        }
      }


      /* -----------------------------------------------------
         PAGE INDICATOR
         ----------------------------------------------------- */

      currentSpread = spreadIndex;


      const currentPages =
        spreads[spreadIndex];


      const firstPage =
        currentPages[0];


      const lastPage =
        currentPages[currentPages.length - 1];


      if (currentPages.length === 1) {

        pageIndicator.textContent =
          `${String(firstPage).padStart(2, "0")} / ${String(
            pdf.numPages
          ).padStart(2, "0")}`;

      } else {

        pageIndicator.textContent =
          `${String(firstPage).padStart(2, "0")}–${String(
            lastPage
          ).padStart(2, "0")} / ${String(
            pdf.numPages
          ).padStart(2, "0")}`;
      }


      /* -----------------------------------------------------
         BUTTONS
         ----------------------------------------------------- */

      prev.disabled =
        currentSpread <= 0;


      next.disabled =
        currentSpread >= spreads.length - 1;


      loading.style.display = "none";


    } catch (error) {

      console.error(
        "PDF spread rendering error:",
        error
      );

      loading.textContent =
        "PDF COULD NOT BE LOADED";

    } finally {

      rendering = false;


      if (queuedSpread !== null) {

        const nextSpread =
          queuedSpread;

        queuedSpread = null;

        renderSpread(nextSpread);
      }
    }
  }


  /* ---------------------------------------------------------
     CREATE CANVAS
     --------------------------------------------------------- */

  async function createPDFCanvas(viewport, page) {

    const canvas =
      document.createElement("canvas");


    const dpr =
      Math.min(
        window.devicePixelRatio || 1,
        2
      );


    canvas.className =
      "pdf-page";


    canvas.width =
      Math.floor(
        viewport.width * dpr
      );


    canvas.height =
      Math.floor(
        viewport.height * dpr
      );


    canvas.style.width =
      `${viewport.width}px`;


    canvas.style.height =
      `${viewport.height}px`;


    const context =
      canvas.getContext("2d");


    context.setTransform(
      dpr,
      0,
      0,
      dpr,
      0,
      0
    );


    await page.render({
      canvasContext: context,
      viewport
    }).promise;


    return canvas;
  }


  /* ---------------------------------------------------------
     LOAD PDF
     --------------------------------------------------------- */

  try {

    pdf =
      await pdfjsLib
        .getDocument(url)
        .promise;


    if (!pdf) {
      throw new Error(
        "PDF could not be loaded."
      );
    }


    await renderSpread(0);


    /* -------------------------------------------------------
       PREVIOUS
       ------------------------------------------------------- */

    prev.addEventListener(
      "click",
      () => {

        if (currentSpread > 0) {

          queueSpread(
            currentSpread - 1
          );
        }
      }
    );


    /* -------------------------------------------------------
       NEXT
       ------------------------------------------------------- */

    next.addEventListener(
      "click",
      () => {

        if (!pdf) return;


        const spreads =
          getSpreads(
            pdf.numPages
          );


        if (
          currentSpread <
          spreads.length - 1
        ) {

          queueSpread(
            currentSpread + 1
          );
        }
      }
    );


    /* -------------------------------------------------------
       RESIZE
       ------------------------------------------------------- */

    let resizeTimer;


    window.addEventListener(
      "resize",
      () => {

        clearTimeout(
          resizeTimer
        );


        resizeTimer =
          setTimeout(() => {

            if (pdf) {
              renderSpread(
                currentSpread
              );
            }

          }, 250);
      }
    );


  } catch (error) {

    console.error(
      "PDF error:",
      error
    );


    loading.textContent =
      "PDF COULD NOT BE LOADED";
  }
}