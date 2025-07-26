"user strict";

/**
 * handel fetch data start
 */
const handleData = async (search = "10") => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${search}`
  );
  const data = await res.json();
  const phone = data.data;
  // console.log(data);
  handleShowData(phone);
};

handleData();
/**
 * handel fetch data end
 */
/**
 * show the fetch data start
 */
const handleShowData = (phone) => {
  // console.log(data);
  const showContainer = document.getElementById("show-container");
  showContainer.textContent = "";

  // show button
  const showBtn = document.getElementById("show-all");
  if (phone.length > 12) {
    showBtn.classList.remove("hidden");
  } else {
    showBtn.classList.add("hidden");
  }
  // display phone item slice
  phone = phone.slice(0, 10);

  phone.forEach((item) => {
    console.log(item);

    const showArea = document.createElement("div");
    showArea.classList = `col-span-4`;
    showArea.innerHTML = `
              <div
                  class="border-2 border-nu50 px-4 py-4 rounded-xl w-full h-full"
                >
                  <div class="bg-primary rounded-xl mb-4">
                    <img
                      class="w-full h-full"
                      src="${item.image}"
                      alt=""
                    />
                  </div>
                  <div class="text-center">
                    <h5 class="text-nu30 mb-3">${item.phone_name}</h5>
                    <p class="text-nu30 mb-4">
                      There are many variations of passages of available, but
                      the majority have suffered
                    </p>
                    <h5 class="text-nu30 mb-4">$999</h5>
                    <div class="">
                      <button
                       onclick="showDetails('${item.slug}')"
                        class="px-6 py-2 rounded-lg bg-nu10 text-secondary1 font-semibold"
                      >
                        Show Details
                      </button>
                    </div>
                  </div>
                </div>
    `;
    showContainer.appendChild(showArea);
  });
  isLoader(false);
};

/**
 * show the fetch data end
 */

/**
 * search this product function start
 */
const searchInput = () => {
  isLoader(true);
  const searchInputArea = document.getElementById("search-input");
  const searchInputAreaText = searchInputArea.value;
  // console.log(searchInputAreaText);
  handleData(searchInputAreaText);
};
/**
 * search this product function end
 */

/**
 * is loader function start
 */
const isLoader = (isLoader) => {
  const isLoaderArea = document.getElementById("is-loader");
  if (isLoader) {
    isLoaderArea.classList.remove("hidden");
  } else {
    isLoaderArea.classList.add("hidden");
  }
};
/**
 * is loader function start
 */

/**
 * phone details popup
 */

const showDetails = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${id}`
  );
  const data = await res.json();
  const phoneId = data.data;

  // console.log(phoneId);
  showPopup(phoneId);
};

// details show popup
const showPopup = (phonePop) => {
  const popupDetails = document.getElementById("details-phone");
  popupDetails.innerHTML = `
  <div class="col-span-7">
                <h3 class="text-lg font-bold text-nu30 pb-3">
                  ${phonePop.name}
                </h3>
                <p class="text-nu30 pb-3 font-semibold">Brand: ${phonePop.brand}</p>
                <p class="text-nu30 pb-3 font-semibold">ChipSet: ${phonePop.mainFeatures.chipSet}</p>
                <p class="text-nu30 pb-3 font-semibold">DisplaySize: ${phonePop.mainFeatures.displaySize}</p>
                <p class="text-nu30 pb-3 font-semibold">Memory: ${phonePop.mainFeatures.memory}</p>
                <p class="text-nu30 pb-3 font-semibold">Bluetooth: ${phonePop.others?.Bluetooth || "NO"}</p>
                <p class="text-nu30 pb-3 font-semibold">GPS: ${phonePop.others?.GPS || "NO"}</p>
                <p class="text-nu30 pb-3 font-semibold">NFC: ${phonePop.others?.NFC || "NO"}</p>
                <p class="text-nu30 pb-3 font-semibold">Radio: ${phonePop.others?.Radio || "NO"}</p>
                <p class="text-nu30 pb-3 font-semibold">USB: ${phonePop.others?.USB || "NO"}</p>
                <p class="text-nu30 pb-3 font-semibold">WLAN: ${phonePop.others?.WLAN || "NO"}</p>
                <p class="text-nu30 pb-3 font-semibold">ReleaseDate: ${phonePop.releaseDate}</p>
              </div>
              <div class="col-span-5">
                <div class="">
                  <img class="" src="${phonePop.image}" alt="" />
                </div>
              </div>
  `;

  details_popup.showModal(phonePop);
};
