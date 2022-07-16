const HomeController = {
  Index: (req, res) => {
    res.render("home/index", { title: "Instapic" });
  },
};

module.exports = HomeController;
