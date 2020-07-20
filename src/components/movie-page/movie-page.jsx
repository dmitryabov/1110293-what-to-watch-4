import React from "react";
import PropTypes from "prop-types";


const MoviePage = (props) => {
 
  return (
      <div>
    <section class="movie-card movie-card--full">
    <div class="movie-card__hero">
      <div class="movie-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
      </div>

      <h1 class="visually-hidden">WTW</h1>

      <header class="page-header movie-card__head">
        <div class="logo">
          <a href="main.html" class="logo__link">
            <span class="logo__letter logo__letter--1">W</span>
            <span class="logo__letter logo__letter--2">T</span>
            <span class="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div class="user-block">
          <div class="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
      </header>

      <div class="movie-card__wrap">
        <div class="movie-card__desc">
          <h2 class="movie-card__title">The Grand Budapest Hotel</h2>
          <p class="movie-card__meta">
            <span class="movie-card__genre">Drama</span>
            <span class="movie-card__year">2014</span>
          </p>

          <div class="movie-card__buttons">
            <button class="btn btn--play movie-card__button" type="button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use href="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <button class="btn btn--list movie-card__button" type="button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use href="#add"></use>
              </svg>
              <span>My list</span>
            </button>
            <a href="add-review.html" class="btn movie-card__button">Add review</a>
          </div>
        </div>
      </div>
    </div>

    <div class="movie-card__wrap movie-card__translate-top">
      <div class="movie-card__info">
        <div class="movie-card__poster movie-card__poster--big">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>

        <div class="movie-card__desc">
          <nav class="movie-nav movie-card__nav">
            <ul class="movie-nav__list">
              <li class="movie-nav__item movie-nav__item--active">
                <a href="#" class="movie-nav__link">Overview</a>
              </li>
              <li class="movie-nav__item">
                <a href="#" class="movie-nav__link">Details</a>
              </li>
              <li class="movie-nav__item">
                <a href="#" class="movie-nav__link">Reviews</a>
              </li>
            </ul>
          </nav>

          <div class="movie-rating">
            <div class="movie-rating__score">8,9</div>
            <p class="movie-rating__meta">
              <span class="movie-rating__level">Very good</span>
              <span class="movie-rating__count">240 ratings</span>
            </p>
          </div>

          <div class="movie-card__text">
            <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>

            <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>

            <p class="movie-card__director"><strong>Director: Wes Andreson</strong></p>

            <p class="movie-card__starring"><strong>Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other</strong></p>
          </div>
        </div>
      </div>
    </div>
  </section>
   <div class="page-content">
   <section class="catalog catalog--like-this">
     <h2 class="catalog__title">More like this</h2>

     <div class="catalog__movies-list">
       <article class="small-movie-card catalog__movies-card">
         <div class="small-movie-card__image">
           <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
         </div>
         <h3 class="small-movie-card__title">
           <a class="small-movie-card__link" href="movie-page.html">Fantastic Beasts: The Crimes of Grindelwald</a>
         </h3>
       </article>

       <article class="small-movie-card catalog__movies-card">
         <div class="small-movie-card__image">
           <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width="280" height="175" />
         </div>
         <h3 class="small-movie-card__title">
           <a class="small-movie-card__link" href="movie-page.html">Bohemian Rhapsody</a>
         </h3>
       </article>

       <article class="small-movie-card catalog__movies-card">
         <div class="small-movie-card__image">
           <img src="img/macbeth.jpg" alt="Macbeth" width="280" height="175" />
         </div>
         <h3 class="small-movie-card__title">
           <a class="small-movie-card__link" href="movie-page.html">Macbeth</a>
         </h3>
       </article>

       <article class="small-movie-card catalog__movies-card">
         <div class="small-movie-card__image">
           <img src="img/aviator.jpg" alt="Aviator" width="280" height="175" />
         </div>
         <h3 class="small-movie-card__title">
           <a class="small-movie-card__link" href="movie-page.html">Aviator</a>
         </h3>
       </article>
     </div>
   </section>

   <footer class="page-footer">
     <div class="logo">
       <a href="main.html" class="logo__link logo__link--light">
         <span class="logo__letter logo__letter--1">W</span>
         <span class="logo__letter logo__letter--2">T</span>
         <span class="logo__letter logo__letter--3">W</span>
       </a>
     </div>

     <div class="copyright">
       <p>© 2019 What to watch Ltd.</p>
     </div>
   </footer>
 </div>
 </div>
  );
};



export default MoviePage;
