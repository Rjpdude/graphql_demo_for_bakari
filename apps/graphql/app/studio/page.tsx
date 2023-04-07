'use client';

import { Explore } from "./explore"
import { Global, css } from '@emotion/react';

const global = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    height: 100vh;
    width: 100vw;
    display: flex;
    overflow: hidden;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;

    section {
      flex: 1;

      div {
        height: 100%;

        .apollo-embed-1 {
          .midnight-darker .pr-2 {
            display: none;
          }
        }
      }
    }
  }
`

export default function Page() {
  return (
    <main>
      <section>
        <Global styles={global} />
        <Explore
          schema=""
          endpoint="http://localhost:4000"
        />
      </section>
    </main>
  )
}
