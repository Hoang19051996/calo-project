import { Footer } from "../component/Footer";
import Header from "../component/Nav";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
export const Blog = () => {
  return (
    <>
      <div>
        <Header />

        <br></br>
      </div>
      <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit">
            Blog
          </Link>
          <Typography color="text.primary">
            6 great benefits of eating fresh fruit daily{" "}
          </Typography>
        </Breadcrumbs>
        <br></br>
        <h3>6 great benefits of eating fresh fruit daily</h3>
        <img
          src="https://mageblueskytech.com/armania/media/rokanthemes/blog/images/o/r/xorganic-blog3_1.jpg.pagespeed.ic.EFm6GF4Eon.webp"
          width={"60%"}
        />
        <br/>
        <p>
          Fruit has a lot of nutrients, fiber and vitamins so it will help you
          be physically and mentally healthy, reducing the risk of disease.
          Adding fruits to your daily diet will have great health benefits.
          There are many reasons to eat fruit every day, but keep in mind that
          consuming fresh fruit will be much better than preserving or canned
          fruits. Fruit is a rich fiber and it is low in calories so it is
          especially beneficial for those who want to lose weight while being
          full of energy. <br/>Here are 5 benefits of eating fresh fruit daily: Avoid
          cancer According to the World Health Organization, a diet consisting
          of 5 servings of fruit a day can help reduce the growth of cancer.
          Many studies find that most cancers develop due to a deficiency of
          certain nutrients. <br/> Berries and tomatoes are fruits rich in
          antioxidants so will be able to fight cancer effectively. Prevent
          chronic diseases One of the reasons you eat fruits daily is to prevent
          chronic heart diseases. Fruits are low in calories and are an
          excellent source of vitamins and minerals. Fruits also contain
          antioxidants and folic acid, which help lower blood pressure and
          prevent cardiovascular disease. <br/>Apples, oranges and bananas are super
          fruits that give you a healthy heart. Strengthen the brain In one
          study, scientists found that eating blueberries may boost your memory.
          Diseases related to memory impairment are often age-related, but
          fortunately, the disease can be prevented by consuming fruits in the
          daily diet. <br/>Blueberries have nutrients that help develop new brain
          cells to prevent memory loss. This is one of the reasons why you
          should eat this fruit every day. Weight loss Replacing greasy foods
          with fruits is a very smart decision. Eating fruit at a snack between
          meals will help you feel fuller, avoiding the risk of overeating, thus
          also reducing the risk of weight gain. <br/>Skin beauty You want a fair
          complexion, so don’t ask why you should eat fruit every day. Most
          fruits, especially avocados, have a large amount of vitamin E that
          slows down the aging rate and helps skin look fair. Strengthen
          immunity Some fruits have a great combination of vitamin C, vitamin A
          and carotenoids (an antioxidant) … so it can easily contribute to
          boosting your immune system. Fruits like mango are the best choice for
          you. Fruit can be called super food for you healthy, beautiful,
          youthful, happy and love life. So what are you waiting for without
          choosing the fruits you like to supplement in your daily diet.{" "}
        </p>
      </div>

      <Footer />
    </>
  );
};
