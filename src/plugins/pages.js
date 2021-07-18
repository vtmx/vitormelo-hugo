export default {
  // menu
  toggleMenu(currentTarget) {
    this.removeActiveMenu('.menu a.active');
    this.addActiveMenu(currentTarget);

    const page = document.getElementById(currentTarget.dataset.page);
    this.removeActivePage();
    this.addActivePage(page);
  },
  removeActiveMenu() {
    let oldMenuActive = document.querySelectorAll('.menu a.active')[0];
    if (oldMenuActive) {
      oldMenuActive.classList.remove('active');
    }
  },
  addActiveMenu(currentTarget) {
    currentTarget.classList.add('active');
  },
  // page
  togglePage(page) {
    const pageId = page.getAttribute('id');
    const menuActive = document.querySelector(`.menu a[data-page="${pageId}"]`);
    this.removeActiveMenu();
    this.addActiveMenu(menuActive);
    this.removeActivePage();
    this.addActivePage(page);
  },
  removeActivePage() {
    let oldActivePage = document.querySelectorAll('section.active')[0];
    if (oldActivePage) {
      oldActivePage.classList.remove('active');
    }
  },
  addActivePage(page) {
    page.classList.add('active');
  },
};
