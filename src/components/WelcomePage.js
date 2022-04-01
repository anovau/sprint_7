import { Link } from "react-router-dom";
import "./welcomePage.css";

function WelcomePage() {
  return (
    <main>
      <section>
        <h1>BUDGET APP</h1>
        <h2>
          With this app you can calculate your Digital Marketing budget (website
          creation, SEO and SEM)
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in
          lorem eu ante feugiat rhoncus. Suspendisse in ligula urna. Aliquam
          vulputate orci lacus, in pulvinar purus fermentum quis. In sed velit
          at sem molestie luctus quis egestas nisl. Donec molestie massa sit
          amet lacus eleifend, sit amet varius felis ullamcorper. Morbi urna
          ante, condimentum at est et, rhoncus feugiat metus.
        </p>
        <Link to="/PageApp">
          <button>CALCULATE BUDGET</button>
        </Link>
      </section>
    </main>
  );
}
export default WelcomePage;
