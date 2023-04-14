function showsidebar() {
  const sidebar = document.getElementById("sidebar");
  const classes = sidebar.classList;
  const translate = "translate-x-96";

  classes.contains(translate)
    ? classes.remove(translate)
    : classes.add(translate);
}
