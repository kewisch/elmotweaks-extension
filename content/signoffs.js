/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * Portions Copyright (C) Philipp Kewisch, 2017 */

function signoff(push) {
  document.querySelector("#signoff_form input[name='push']").value = push;
  document.querySelector("#signoff_form").submit();
}

function signoffLatest() {
  let latestPush = document.querySelector(".pushrow-first").dataset.push;
  signoff(latestPush);
}

window.addEventListener("keypress", (event) => {
  if (!event.metaKey && !event.ctrlKey && event.key == "O") {
    signoffLatest();
    event.preventDefault();
    event.stopPropagation();
  }
});
