import React from "react";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
import Thumbnail from "../images/Thumbnail4.jpg";

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className="btn sm primary">
              Edit
            </Link>
            <Link to={`/posts/werwer/delete`} className="btn sm danger">
              Delete
            </Link>
          </div>
        </div>
        <h1>This is the post title!</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
          accusantium nostrum reiciendis molestias sint dolor quas id
          praesentium hic quia numquam pariatur enim veritatis aut, facere illum
          fuga maxime non magni! Est impedit veritatis, vel voluptatum qui culpa
          tenetur quo.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut laboriosam
          hic laborum alias fugiat debitis laudantium quis, cum ipsam cumque
          perferendis dolorem! Quas, fuga dolorum? Velit, eos. Enim a voluptates
          ad eos error necessitatibus, in, ex placeat rerum velit cumque magnam!
          In sequi ullam amet alias dolores, accusamus laborum voluptatibus
          natus voluptates. Vitae, voluptatum optio!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, libero
          est fuga sapiente, dolor aut aliquid deserunt adipisci repudiandae
          iste voluptates earum quam? Deserunt ipsam voluptatem excepturi, odio
          ut debitis ratione illum distinctio voluptatibus earum sit reiciendis
          error quae dolore. Minima omnis incidunt nisi eius aperiam ab
          molestiae. Cum deserunt atque cumque rem corrupti. Tempora eaque
          magnam laudantium natus cum unde dolorem aliquam. Laborum qui repellat
          veniam adipisci sit a minus aut. Error repudiandae ipsam minima quasi
          expedita, quam perferendis sit fuga, quidem nesciunt quas a libero
          laborum magnam officiis voluptates veniam. Consequatur eos aliquid
          soluta eaque veritatis sunt deleniti vitae corporis perspiciatis, unde
          earum corrupti reprehenderit tenetur eius. Reprehenderit, eum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          non atque sapiente dolor fuga aspernatur consequuntur a corrupti ea
          eligendi.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
          cum consequatur itaque accusamus alias porro officiis corrupti ratione
          dolores non. Iusto esse voluptates, perspiciatis consectetur enim
          laborum similique commodi minus earum deleniti maiores iste beatae
          quia? Dolorum, soluta. Quidem provident ipsum molestias eius ipsa
          error a hic, optio delectus quas modi animi veritatis! Qui
          perspiciatis tempora, consectetur ab veniam tenetur nulla excepturi
          rem maiores, sit eos aliquam ducimus? Dolorum molestias vero officiis
          nobis eveniet ipsam minus recusandae necessitatibus, voluptatem
          voluptates laborum nemo optio debitis? Porro, vitae dignissimos error
          corporis explicabo doloremque delectus consequuntur quo dolorem ipsa,
          iste nostrum, maiores officiis corrupti consectetur quaerat illo
          minima. Laboriosam consequatur voluptas, magnam obcaecati ab soluta
          explicabo omnis suscipit laudantium mollitia cumque repudiandae
          dolorum cum dolorem amet? Molestiae, natus ea facilis repudiandae aut
          veritatis mollitia ipsa doloremque, quibusdam rerum cumque
          necessitatibus quos provident amet. Neque quaerat dolores minima
          reprehenderit atque labore magnam est quisquam aperiam ad temporibus
          libero, iusto provident exercitationem perferendis officiis ut commodi
          reiciendis, laboriosam amet unde illum, nemo assumenda eius! Cum
          dignissimos quisquam sint alias iusto odit nihil. Modi ipsam nam error
          impedit explicabo, nobis molestiae maxime temporibus quibusdam,
          tempora sapiente, laudantium provident delectus dignissimos ducimus.
          Fugit quod ex reprehenderit minima.
        </p>
      </div>
    </section>
  );
};

export default PostDetail;
