"use client";

import React, { useState } from "react";
import { ThemeSwitcher } from "@/components/ui/apple-liquid-glass-switcher";
import "@/index.css";

type Theme = "light" | "dark" | "dim";

export default function Demo() {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <div className="theme-provider" data-theme={theme}>
      <ThemeSwitcher value={theme} onValueChange={setTheme} />
      <article className="article">
        <h1>Liquid glass</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maxime
          optio quam debitis autem, maiores odio tenetur dicta aperiam aliquam,
          iusto nisi ipsum tempore dolore doloremque facere non culpa sint sequi
          ducimus corporis veritatis cumque corrupti sed. Ipsa dolor quod alias
          dicta dolores. Ducimus pariatur nostrum quo, impedit{" "}
          <a href="#">facilis voluptatibus</a>! Non doloremque, facere neque
          dolorem animi earum odio placeat quae voluptatem nisi nihil deleniti
          voluptatibus harum magnam adipisci tenetur. Ab aliquid reprehenderit
          accusamus id quae velit quasi nostrum possimus ipsa vel. Voluptate
          nisi impedit placeat nemo neque asperiores iure saepe, eius eligendi
          odit quisquam delectus veniam autem, sequi laborum atque
        </p>

        <figure>
          <img
            src="https://images.unsplash.com/photo-1734606901283-489b25f7aa9b?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Photo by Irene Demetri on Unsplash"
          />
          <figcaption>
            Photo by Irene Demetri on{" "}
            <a href="https://unsplash.com/photos/a-close-up-of-a-green-object-on-a-yellow-background-A2kyFEwh3zo">
              Unsplash
            </a>
          </figcaption>
        </figure>
        <a href="//codepen.io/DedaloD">Den Dionigi | UX Designer</a>
      </article>
    </div>
  );
}
