import React from "react";
import "./App.css";

export default function App() {
  return (
    <>
      <nav class="navigation">
        <div class="navigation__menu">
          <button class="navigation__button navigation__menu__button">
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
            >
              <g>
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
              </g>
            </svg>
          </button>
          <img
            src="https://github.com/imtiyazshamim/Youtube-clone/blob/main/youtube-clone/assets/youtube-logo.png?raw=true"
            alt="youTube logo"
          />
        </div>

        <div class="navigation__search">
          <input type="search" placeholder="Search" />

          <button class="navigation__button navigation__search__icon">
            <svg viewBox="0 0 24 24" class="navigation__icon">
              <g>
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
              </g>
            </svg>
          </button>
          <button class="navigation__button">
            <svg viewBox="0 0 24 24" class="navigation__icon">
              <g>
                <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path>
              </g>
            </svg>
          </button>
        </div>

        {/* <div class="navigation__options"> */}
        <button class="navigation__button">
          <svg viewBox="0 0 24 24" class="navigation__icon">
            <g>
              <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"></path>
            </g>
          </svg>
        </button>
        <button class="navigation__button">
          <svg viewBox="0 0 24 24" class="navigation__icon">
            <g>
              <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path>
            </g>
          </svg>
        </button>
        <button class="navigation__button">
          <svg viewBox="0 0 24 24" class="navigation__icon">
            <g>
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>
            </g>
          </svg>
        </button>
        <div class="">
          <img
            class="feed__item__info__avatar"
            alt="hello"
            src="https://yt3.ggpht.com/E9K3kX2Qg8DzIx47y4m5ypWrwDA75QvYT-KOzOqItawbQqgfnB7HQtxdRvqPjIhZ7vUeat1ryQ=s48-c-k-c0x00ffffff-no-rj"
          />{" "}
        </div>
        <div></div>
      </nav>

      <div class="chips">
        <div class="chips__item chips__item--selected">All</div>
        <div class="chips__item">Wordpress</div>
        <div class="chips__item">Bootstrap</div>
        <div class="chips__item">Shopify</div>
        <div class="chips__item">Magento</div>
        <div class="chips__item">ReactJs</div>
        <div class="chips__item">Angular Js</div>
      </div>

      <div class="sidebar">
        <section class="sidebar__section">
          <a
            class="sidebar__section__link sidebar__section__link--selected"
            href="/"
          >
            <svg viewBox="0 0 24 24">
              <g>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8"></path>
              </g>
            </svg>
            <span>Home</span>
          </a>
          <a class="sidebar__section__link" href="/">
            <svg viewBox="0 0 24 24">
              <g>
                <path d="M11.23 13.08c-.29-.21-.48-.51-.54-.86-.06-.35.02-.71.23-.99.21-.29.51-.48.86-.54.35-.06.7.02.99.23.29.21.48.51.54.86.06.35-.02.71-.23.99a1.327 1.327 0 01-1.08.56c-.28 0-.55-.08-.77-.25zM22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zm-3.97-6.03L9.8 9.8l-3.83 8.23 8.23-3.83 3.83-8.23z"></path>
              </g>
            </svg>
            <span>Explore</span>
          </a>
          <a class="sidebar__section__link" href="/">
            <svg viewBox="0 0 24 24">
              <g>
                <path d="M18.7 8.7H5.3V7h13.4v1.7zm-1.7-5H7v1.6h10V3.7zm3.3 8.3v6.7c0 1-.7 1.6-1.6 1.6H5.3c-1 0-1.6-.7-1.6-1.6V12c0-1 .7-1.7 1.6-1.7h13.4c1 0 1.6.8 1.6 1.7zm-5 3.3l-5-2.7V18l5-2.7z"></path>
              </g>
            </svg>
            <span>Subscriptions</span>
          </a>
          <a class="sidebar__section__link" href="/">
            <svg viewBox="0 0 24 24">
              <g>
                <path
                  fill-rule="nonzero"
                  d="M21.78 8s-.2-1.37-.8-1.97c-.75-.8-1.6-.8-2-.85C16.2 4.98 12 5 12 5s-4.18-.02-6.97.18c-.4.05-1.24.05-2 .85-.6.6-.8 1.97-.8 1.97s-.2 1.63-.23 3.23v1.7c.03 1.6.23 3.2.23 3.2s.2 1.4.8 2c.76.8 1.75.76 2.2.85 1.57.15 6.6.18 6.77.18 0 0 4.2 0 7-.2.38-.04 1.23-.04 2-.84.6-.6.8-1.98.8-1.98s.2-1.6.2-3.22v-1.7c-.02-1.6-.22-3.22-.22-3.22zm-11.8 7V9.16l5.35 3.03L9.97 15z"
                ></path>
              </g>
            </svg>
            <span>Originals</span>
          </a>
          <a class="sidebar__section__link" href="/">
            <svg viewBox="0 0 24 24">
              <g>
                <path
                  d="M12 0.47998C5.63998 0.47998 0.47998 5.63998 0.47998 12C0.47998 18.36 5.63998 23.52 12 23.52C18.36 23.52 23.52 18.36 23.52 12C23.52 5.63998 18.36 0.47998 12 0.47998ZM12 18.82C8.22998 18.82 5.17998 15.77 5.17998 12C5.17998 8.22998 8.22998 5.17998 12 5.17998C15.77 5.17998 18.82 8.22998 18.82 12C18.82 15.77 15.77 18.82 12 18.82Z"
                  fill-rule="nonzero"
                ></path>
                <path
                  d="M12 6.02002C8.70996 6.02002 6.01996 8.70002 6.01996 12C6.01996 15.3 8.69996 17.98 12 17.98C15.3 17.98 17.98 15.3 17.98 12C17.98 8.70002 15.29 6.02002 12 6.02002ZM9.74996 15.4V8.60002L15.63 12L9.74996 15.4Z"
                  fill-rule="nonzero"
                ></path>
              </g>
            </svg>
            <span>YouTube Music</span>
          </a>
        </section>

        <section class="sidebar__section">
          <a class="sidebar__section__link" href="/">
            <svg viewBox="0 0 24 24">
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"></path>
              </g>
            </svg>
            <span>Library</span>
          </a>

          <a class="sidebar__section__link" href="/">
            <svg viewBox="0 0 24 24">
              <g>
                <path d="M11.9 3.75c-4.55 0-8.23 3.7-8.23 8.25H.92l3.57 3.57.04.13 3.7-3.7H5.5c0-3.54 2.87-6.42 6.42-6.42 3.54 0 6.4 2.88 6.4 6.42s-2.86 6.42-6.4 6.42c-1.78 0-3.38-.73-4.54-1.9l-1.3 1.3c1.5 1.5 3.55 2.43 5.83 2.43 4.58 0 8.28-3.7 8.28-8.25 0-4.56-3.7-8.25-8.26-8.25zM11 8.33v4.6l3.92 2.3.66-1.1-3.2-1.9v-3.9H11z"></path>
              </g>
            </svg>
            <span>History</span>
          </a>

          <a class="sidebar__section__link" href="/">
            <svg viewBox="0 0 24 24">
              <g>
                <path d="M18.4 5.6v12.8H5.6V5.6h12.8zm0-1.8H5.6a1.8 1.8 0 0 0-1.8 1.8v12.8a1.8 1.8 0 0 0 1.8 1.9h12.8a1.8 1.8 0 0 0 1.9-1.9V5.6a1.8 1.8 0 0 0-1.9-1.8z"></path>
                <path d="M10.2 9v6.5l5-3.2-5-3.2z"></path>
              </g>
            </svg>
            <span>Your Videos</span>
          </a>

          <a class="sidebar__section__link" href="/">
            <svg viewBox="0 0 24 24">
              <g>
                <path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"></path>
              </g>
            </svg>
            <span>Watch later</span>
          </a>

          <a class="sidebar__section__link" href="/">
            <svg viewBox="0 0 24 24">
              <g>
                <path d="M3.67 8.67h14V11h-14V8.67zm0-4.67h14v2.33h-14V4zm0 9.33H13v2.34H3.67v-2.34zm11.66 0v7l5.84-3.5-5.84-3.5z"></path>
              </g>
            </svg>
            <span>Your Playlists</span>
          </a>

          <a class="sidebar__section__link" href="/">
            <svg viewBox="0 0 24 24">
              <g>
                <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
              </g>
            </svg>
            <span>Show more</span>
          </a>
        </section>

        <section class="sidebar__section">
          <h3>Subscriptions</h3>
          <a
            class="sidebar__section__link"
            href="https://www.youtube.com/channel/UCTCBO9YrdGSHUCTgz4nuevQ"
          >
            <div class="">
              <img
                class="feed__item__info__avatar"
                alt="hello"
                src="https://yt3.ggpht.com/E9K3kX2Qg8DzIx47y4m5ypWrwDA75QvYT-KOzOqItawbQqgfnB7HQtxdRvqPjIhZ7vUeat1ryQ=s48-c-k-c0x00ffffff-no-rj"
              />{" "}
            </div>

            <span>DIGITAL CABIN</span>
          </a>
        </section>

        <section class="sidebar__section">
          <h3>More from YouTube</h3>
          <a href="/" class="sidebar__section__link">
            <svg viewBox="0 0 24 24">
              <g>
                <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path>
                <path d="M0 0h24v24H0z" fill="none"></path>
              </g>
            </svg>
            <span>Movies & Shows</span>
          </a>
          <a href="/" class="sidebar__section__link">
            <svg viewBox="0 0 24 24">
              <g fill-rule="evenodd">
                <path d="M22,13V8l-5-3l-5,3l0,0L7,5L2,8v5l10,6L22,13z M9,11H7v2H6v-2H4v-1h2V8h1v2h2V11z M15,13 c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S15.55,13,15,13z M18,11c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S18.55,11,18,11z"></path>
              </g>
            </svg>
            <span>Gaming</span>
          </a>
          <a href="/" class="sidebar__section__link">
            <svg viewBox="0 0 24 24">
              <g>
                <path d="M16.94 6.91l-1.41 1.45c.9.94 1.46 2.22 1.46 3.64s-.56 2.71-1.46 3.64l1.41 1.45c1.27-1.31 2.05-3.11 2.05-5.09s-.78-3.79-2.05-5.09zM19.77 4l-1.41 1.45C19.98 7.13 21 9.44 21 12.01c0 2.57-1.01 4.88-2.64 6.54l1.4 1.45c2.01-2.04 3.24-4.87 3.24-7.99 0-3.13-1.23-5.96-3.23-8.01zM7.06 6.91c-1.27 1.3-2.05 3.1-2.05 5.09s.78 3.79 2.05 5.09l1.41-1.45c-.9-.94-1.46-2.22-1.46-3.64s.56-2.71 1.46-3.64L7.06 6.91zM5.64 5.45L4.24 4C2.23 6.04 1 8.87 1 11.99c0 3.13 1.23 5.96 3.23 8.01l1.41-1.45C4.02 16.87 3 14.56 3 11.99s1.01-4.88 2.64-6.54z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </g>
            </svg>
            <span>Live</span>
          </a>
          <a href="/" class="sidebar__section__link">
            <svg viewBox="0 0 24 24">
              <g>
                <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"></path>
              </g>
            </svg>
            <span>Learning</span>
          </a>
          <a href="/" class="sidebar__section__link">
            <svg viewBox="0 0 24 24">
              <g>
                <path d="M6.85 7.76V6.18H1v2.88c0 2.35 1.9 4.26 4.26 4.26h1.59v-1.59H5.4a2.81 2.81 0 01-2.81-2.8V7.75h4.26zM17.15 7.76V6.18H23v2.88c0 2.35-1.9 4.26-4.26 4.26h-1.59v-1.59h1.45a2.81 2.81 0 002.81-2.8V7.75h-4.26z"></path>
                <path d="M12 17.29a6.87 6.87 0 01-6.87-6.87V3h13.74v7.42c0 3.8-3.07 6.87-6.87 6.87z"></path>
                <path d="M12 17.29V3h6.87v7.42c0 3.8-3.07 6.87-6.87 6.87zM12 17.29l4.13 2.38H7.88L12 17.3zM16.13 19.67H7.88v2.38h8.25v-2.38z"></path>
              </g>
            </svg>
            <span>Sports</span>
          </a>
        </section>

        <section class="sidebar__section">
          <a href="/" class="sidebar__section__link">
            <svg viewBox="0 0 24 24">
              <g>
                <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.1-1.65c.2-.15.25-.42.13-.64l-2-3.46c-.12-.22-.4-.3-.6-.22l-2.5 1c-.52-.4-1.08-.73-1.7-.98l-.37-2.65c-.06-.24-.27-.42-.5-.42h-4c-.27 0-.48.18-.5.42l-.4 2.65c-.6.25-1.17.6-1.7.98l-2.48-1c-.23-.1-.5 0-.6.22l-2 3.46c-.14.22-.08.5.1.64l2.12 1.65c-.04.32-.07.65-.07.98s.02.66.06.98l-2.1 1.65c-.2.15-.25.42-.13.64l2 3.46c.12.22.4.3.6.22l2.5-1c.52.4 1.08.73 1.7.98l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.6-.25 1.17-.6 1.7-.98l2.48 1c.23.1.5 0 .6-.22l2-3.46c.13-.22.08-.5-.1-.64l-2.12-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path>
              </g>
            </svg>
            <span>Settings</span>
          </a>
          <a href="/" class="sidebar__section__link">
            <svg viewBox="0 0 24 24">
              <g>
                <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path>
              </g>
            </svg>
            <span>Report history</span>
          </a>
          <a href="/" class="sidebar__section__link">
            <svg viewBox="0 0 24 24">
              <g>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path>
              </g>
            </svg>
            <span>Help</span>
          </a>
          <a href="/" class="sidebar__section__link">
            <svg viewBox="0 0 24 24">
              <g>
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"></path>
              </g>
            </svg>
            <span>Send feedback</span>
          </a>
        </section>

        <section class="sidebar__section"></section>
      </div>

      <main class="feed">
        <div class="feed__item">
          <a href="https://www.youtube.com/watch?v=JXl4QgYUi9c&t=1s">
            <div class="">
              <img src="https://i.ytimg.com/vi/JXl4QgYUi9c/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBBPEIN00Pqor8cmWxpdFLAXGblrQ" alt="hello"/>
            </div>
          </a>
          <div class="feed__item__info">
            <div class="">
              <img
                class="feed__item__info__avatar"
                alt="hello"
                src="https://yt3.ggpht.com/E9K3kX2Qg8DzIx47y4m5ypWrwDA75QvYT-KOzOqItawbQqgfnB7HQtxdRvqPjIhZ7vUeat1ryQ=s48-c-k-c0x00ffffff-no-rj"
              />{" "}
            </div>
            <div>
              <h3>
                <a href="https://www.youtube.com/watch?v=JXl4QgYUi9c&t=1s">
                  {" "}
                  Create Windows 11 | using <br /> HTML CSS JAVASCRIPT |
                </a>
              </h3>
              <a href="https://www.youtube.com/channel/UCTCBO9YrdGSHUCTgz4nuevQ">
                DIGITAL CABIN
              </a>
              <p> 2M Views &middot; 18 Jul 2021</p>
            </div>
          </div>
        </div>
        <div class="feed__item">
          <a href="https://www.youtube.com/watch?v=G5AamksGoNU">
            <div class="">
              <img src="https://i.ytimg.com/vi/G5AamksGoNU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBeO9nAABKPsyNyBzDMlDmJgu9jWQ" alt="hello"/>
            </div>
          </a>
          <div class="feed__item__info">
            <div class="">
              <img
                class="feed__item__info__avatar"
                alt="hello"
                src="https://yt3.ggpht.com/E9K3kX2Qg8DzIx47y4m5ypWrwDA75QvYT-KOzOqItawbQqgfnB7HQtxdRvqPjIhZ7vUeat1ryQ=s48-c-k-c0x00ffffff-no-rj"
              />{" "}
            </div>
            <div>
              <h3>
                <a href="https://www.youtube.com/watch?v=G5AamksGoNU">
                  {" "}
                  Create a Budget App in Vue Js|
                  <br /> Best Budget app UI |
                </a>
              </h3>
              <a href="https://www.youtube.com/channel/UCTCBO9YrdGSHUCTgz4nuevQ">
                DIGITAL CABIN
              </a>
              <p> 30K Views &middot; 08 Aug 2021</p>
            </div>
          </div>
        </div>

        <div class="feed__item">
          <a href="https://www.youtube.com/watch?v=NqUQm0EGGQE">
            <div class="">
              <img src="https://i.ytimg.com/vi/msUvvBLdUs0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCcIvi9LLsl1uL85oIbSKg13PUnrA" alt="hello"/>
            </div>
          </a>
          <div class="feed__item__info">
            <div class="">
              <img
                class="feed__item__info__avatar"
                alt="hello"
                src="https://yt3.ggpht.com/E9K3kX2Qg8DzIx47y4m5ypWrwDA75QvYT-KOzOqItawbQqgfnB7HQtxdRvqPjIhZ7vUeat1ryQ=s48-c-k-c0x00ffffff-no-rj"
              />{" "}
            </div>
            <div>
              <h3>
                <a href="https://www.youtube.com/watch?v=NqUQm0EGGQE">
                  Glassmorphism Design <br /> Using [ HTML CSS JS ]{" "}
                </a>
              </h3>
              <a href="https://www.youtube.com/channel/UCTCBO9YrdGSHUCTgz4nuevQ">
                DIGITAL CABIN
              </a>
              <p> 15K Views &middot; 18 Jul 2021</p>
            </div>
          </div>
        </div>
        <div class="feed__item">
          <a href="https://www.youtube.com/watch?v=NqUQm0EGGQE">
            <div>
              <img src="https://i.ytimg.com/vi/NqUQm0EGGQE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCupyFE5cDNxP4jsPXeiMOwpu6L2A" alt="hello"/>
            </div>
          </a>
          <div class="feed__item__info">
            <div class="">
              <img
                class="feed__item__info__avatar"
                alt="hello"
                src="https://yt3.ggpht.com/E9K3kX2Qg8DzIx47y4m5ypWrwDA75QvYT-KOzOqItawbQqgfnB7HQtxdRvqPjIhZ7vUeat1ryQ=s48-c-k-c0x00ffffff-no-rj"
              />{" "}
            </div>
            <div>
              <h3>
                <a href="https://www.youtube.com/watch?v=NqUQm0EGGQE">
                  {" "}
                  Top Neumorphism UI Design <br /> Using Html CSS & Javascript{" "}
                </a>
              </h3>
              <a href="https://www.youtube.com/channel/UCTCBO9YrdGSHUCTgz4nuevQ">
                DIGITAL CABIN
              </a>
              <p> 5.5K Views &middot; 18 Jul 2021</p>
            </div>
          </div>
        </div>

        <div class="feed__item">
          <a href="https://www.youtube.com/watch?v=YCWx73EDCAY">
            <div>
              <img src="https://i.ytimg.com/vi/YCWx73EDCAY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAAwOVES0SpKS2WY8xkgo8luiLHmg" alt="hello"/>
            </div>
          </a>
          <div class="feed__item__info">
            <div class="">
              <img
                class="feed__item__info__avatar"
                alt="hello"
                src="https://yt3.ggpht.com/E9K3kX2Qg8DzIx47y4m5ypWrwDA75QvYT-KOzOqItawbQqgfnB7HQtxdRvqPjIhZ7vUeat1ryQ=s48-c-k-c0x00ffffff-no-rj"
              />{" "}
            </div>
            <div>
              <h3>
                <a href="https://www.youtube.com/watch?v=YCWx73EDCAY">
                  {" "}
                  Creating Movie App TMDB <br /> Build with JavaScript{" "}
                </a>
              </h3>
              <a href="https://www.youtube.com/channel/UCTCBO9YrdGSHUCTgz4nuevQ">
                DIGITAL CABIN
              </a>
              <p> 5.8k Views &middot; 05 Aug 2021</p>
            </div>
          </div>
        </div>

        <div class="feed__item">
          <a href="https://www.youtube.com/watch?v=JP5KxGRmnMc">
            <div>
              <img src="https://i.ytimg.com/vi/JP5KxGRmnMc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxta4mAOrhmEph_7-TKwad8Sk9tQ" alt="hello"/>
            </div>
          </a>
          <div class="feed__item__info">
            <div class="">
              <img
                class="feed__item__info__avatar"
                alt="hello"
                src="https://yt3.ggpht.com/E9K3kX2Qg8DzIx47y4m5ypWrwDA75QvYT-KOzOqItawbQqgfnB7HQtxdRvqPjIhZ7vUeat1ryQ=s48-c-k-c0x00ffffff-no-rj"
              />{" "}
            </div>
            <div>
              <h3>
                <a href="https://www.youtube.com/watch?v=JP5KxGRmnMc">
                  Video Streaming website
                  <br /> using Html, CSS and Js
                </a>
              </h3>
              <a href="https://www.youtube.com/channel/UCTCBO9YrdGSHUCTgz4nuevQ">
                DIGITAL CABIN
              </a>
              <p> 1M Views &middot; 23 Jul 2021</p>
            </div>
          </div>
        </div>

        <div class="feed__item">
          <a href="https://www.youtube.com/watch?v=sadCggIqDtg">
            <div>
              <img src="https://i.ytimg.com/vi/sadCggIqDtg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhb61LYac2sXO61X9-vUavmn9GQA" alt="hello"/>
            </div>
          </a>
          <div class="feed__item__info">
            <div class="">
              <img
                class="feed__item__info__avatar"
                alt="hello"
                src="https://yt3.ggpht.com/E9K3kX2Qg8DzIx47y4m5ypWrwDA75QvYT-KOzOqItawbQqgfnB7HQtxdRvqPjIhZ7vUeat1ryQ=s48-c-k-c0x00ffffff-no-rj"
              />{" "}
            </div>
            <div>
              <h3>
                <a href="https://www.youtube.com/watch?v=sadCggIqDtg">
                  Create a Website <br />
                  With Video Background{" "}
                </a>
              </h3>
              <a href="https://www.youtube.com/channel/UCTCBO9YrdGSHUCTgz4nuevQ">
                DIGITAL CABIN
              </a>
              <p> 10k Views &middot; 11 Jul 2021</p>
            </div>
          </div>
        </div>

        <div class="feed__item">
          <a href="https://www.youtube.com/watch?v=DLcySA4c5s8&t=35s">
            <div>
              <img src="https://i.ytimg.com/vi/DLcySA4c5s8/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBsSAE1-1lXhp_hPOQqcu_buu720A" alt="hello"/>
            </div>
          </a>
          <div class="feed__item__info">
            <div class="">
              <img
                class="feed__item__info__avatar"
                alt="hello"
                src="https://yt3.ggpht.com/E9K3kX2Qg8DzIx47y4m5ypWrwDA75QvYT-KOzOqItawbQqgfnB7HQtxdRvqPjIhZ7vUeat1ryQ=s48-c-k-c0x00ffffff-no-rj"
              />{" "}
            </div>
            <div>
              <h3>
                <a href="https://www.youtube.com/watch?v=DLcySA4c5s8&t=05s">
                  Best Responsive Website <br />
                  Theme with Source Code{" "}
                </a>
              </h3>
              <a href="https://www.youtube.com/channel/UCTCBO9YrdGSHUCTgz4nuevQ">
                DIGITAL CABIN
              </a>
              <p> 10k Views &middot; 9 Jul 2021</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
