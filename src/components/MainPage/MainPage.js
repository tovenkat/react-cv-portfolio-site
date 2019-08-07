import React, { useContext } from "react";
import LazyHero from "react-lazy-hero";
import { Context } from "../../Context";
import Skills from "./Skills/Skills";

import Typography from "@material-ui/core/Typography";
import Recomendations from "./Recommendations/Recommendations";
import MacImage from "../../assets/images/alex-loian-dummy-picture-1.jpg";

import Stock4 from "../../assets/images/alex-loian-cv-stock-photos-4.jpg";
import Stock5 from "../../assets/images/alex-loian-cv-stock-photos-5.jpg";

import { Parallax } from "react-parallax";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

export default function MainPage() {
  const [language] = useContext(Context);

  const recomendArea = (
    <>
      <Typography variant="h4" gutterBottom>
        Recomendations
      </Typography>
      <Recomendations />
    </>
  );
  return (
    <div style={{ width: "100%", backgroundColor: "whitesmoke" }}>
      <LazyHero
        opacity={0}
        minHeight="100vh"
        parallaxOffset={60}
        isCentered={true}
        imageSrc={MacImage}
      >
        <div style={{ color: "black", paddingBottom: "38vh" }}>
          <Typography variant="h4" gutterBottom>
            {language === "en" ? "Alex Loian" : "Алексей Лоян"}{" "}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {language === "en"
              ? "React, Redux, Javascript"
              : "Реакт, Редакс, ДжаваСкрипт"}
          </Typography>
        </div>
      </LazyHero>
      <div style={{ textAlign: "center", padding: "15px" }}>
        <Typography variant="h4" gutterBottom>
          {language === "en" ? "About" : "Обо мне"}
        </Typography>
        <div style={{ maxWidth: "600px", margin: "auto" }}>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat odio
            nemo, ab est eum explicabo eaque, placeat ratione esse error in? Vel
            rerum assumenda recusandae accusamus et ad minima quisquam,
            accusantium eum debitis iste saepe suscipit ex eligendi culpa sequi
            possimus obcaecati itaque! Quisquam quos cum debitis unde sunt
            veniam distinctio quibusdam quae dolor quas possimus voluptatem
            necessitatibus quis suscipit nisi, totam esse est iste odit
            repellendus itaque placeat. Ipsam, accusantium repellat ad nulla
            illum consectetur sed nemo enim explicabo non dolore aliquam
            corporis hic, ex vitae suscipit quam. Facilis quidem, fuga eaque,
            soluta ipsa temporibus ducimus, maxime in necessitatibus sequi error
            totam distinctio voluptatem magnam provident earum perspiciatis.
            Sequi laborum odio maxime expedita voluptate nemo vero facilis
            minima facere amet quis aliquid voluptates, ullam obcaecati quasi
            magni in veniam quibusdam, alias ab rem tenetur tempore error fugit?
            Iure perferendis quidem similique deserunt unde reiciendis omnis
            veniam quae enim deleniti ut hic labore eius culpa delectus, iste
            temporibus animi? Aspernatur amet est ducimus minus nihil at ipsum,
            fugiat nostrum provident saepe non corporis optio dolorem officia
            minima necessitatibus! Assumenda error expedita non quam odio minima
            quos, maxime quo sit, labore esse repellat quisquam eius sint
            provident voluptates officiis nostrum voluptatem sequi. Ratione
            corporis obcaecati voluptatum quis optio alias nostrum, dolorum
            neque? Cum, accusantium ipsam dolores debitis recusandae commodi!
            Possimus necessitatibus, commodi, temporibus provident praesentium
            odio accusantium cumque saepe similique reprehenderit fugiat
            consequatur porro ullam ipsa officiis minus nesciunt laborum
            perferendis doloribus voluptate nam ea! Ab, vero aspernatur pariatur
            nulla, odio provident aut quisquam fugiat quis non consectetur et,
            laboriosam numquam cum architecto in quam eos illum quaerat nobis
            debitis! Aperiam dignissimos eos itaque aut consequatur suscipit
            quidem? Magnam possimus vero, aspernatur assumenda voluptas ullam.
            Nostrum dicta quia dignissimos dolorum, enim iusto blanditiis amet
            unde, autem culpa ut aspernatur mollitia adipisci.
          </Typography>
        </div>
      </div>

      <div>
        <div style={styles}>
          <div name="Parallax" />

          <Parallax bgImage={Stock5} strength={500}>
            <div style={{ height: 500 }} />
          </Parallax>
          <div style={{ height: "400px" }}>Horizontal timeline</div>
          {recomendArea}
          <div name="Parallax" />
          <Parallax bgImage={Stock4} strength={500}>
            <div style={{ height: 600 }}>
              <Skills />
            </div>
          </Parallax>
          <Typography variant="h4" gutterBottom>
            Portfolio Content
            <div style={{ height: "400px" }}>Portfolio items</div>
          </Typography>
        </div>
      </div>
    </div>
  );
}
