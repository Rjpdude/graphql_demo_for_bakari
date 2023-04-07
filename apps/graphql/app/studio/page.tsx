import { Explore } from "./explore"

export default function Page() {
  return (
    <main>
      <section>
        <Explore
          schema=""
          endpoint="http://localhost:4000"
        />
      </section>
    </main>
  )
}
