import { FoodArt } from "../../../assets";
import { Button, Heading } from "../../common";

export const HomeView = () => (
  <div className="px-20">
    <div className="m-auto flex w-full gap-x-14 rounded-xl bg-homecard p-20 drop-shadow-2xl">
      <section className="flex flex-col items-center justify-center">
        <Heading as="h1" className="text-homeText">
          Welcome
        </Heading>
        <p className="text-center font-subheader text-xl tracking-wide text-homeText lg:text-xl">
          Sustained Health Starts Here
        </p>
        <div className="mt-6 flex gap-4">
          <Button onClick={() => alert("Not yet implemented")}>
            Create Account
          </Button>
          <Button onClick={() => alert("Not yet implemented")}>Sign In</Button>
        </div>
      </section>
      <FoodArt />
    </div>
  </div>
);

/* Sustained Health Starts Here */

// position: absolute;
// width: 423.39px;
// height: 38px;
// left: 240.06px;
// top: 451px;

// font-family: 'Outfit';
// font-style: normal;
// font-weight: 400;
// font-size: 30px;
// line-height: 38px;
// /* identical to box height */
// display: flex;
// align-items: center;
// text-align: center;
// letter-spacing: 0.05em;

// color: #1C7635;

// TODO: Incorporate actual styling into Home Card Design

// /* Welcome Inset */

// position: absolute;
// width: 1094px;
// height: 586px;
// left: 173px;
// top: 177px;

// /* Rectangle 1 */

// position: absolute;
// width: 1094px;
// height: 586px;
// left: 173px;
// top: 177px;

// background: rgba(255, 254, 254, 0.72);
// box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
// border-radius: 15px;

// /* Website Art Dalle 1 */

// position: absolute;
// width: 423.39px;
// height: 386px;
// left: 725.5px;
// top: 251px;

// background: url(Website Art Dalle.png);
// filter: drop-shadow(30px 30px 8px #000000);
// border-radius: 20px;

// /* Welcome! */

// position: absolute;
// width: 303.28px;
// height: 81px;
// left: 300.12px;
// top: 327px;

// font-family: 'Outfit';
// font-style: normal;
// font-weight: 700;
// font-size: 64px;
// line-height: 81px;
// /* identical to box height */
// display: flex;
// align-items: center;
// text-align: center;
// letter-spacing: 0.03em;

// color: #1C7635;

// /* Sustained Health Starts Here */

// position: absolute;
// width: 423.39px;
// height: 38px;
// left: 240.06px;
// top: 451px;

// font-family: 'Outfit';
// font-style: normal;
// font-weight: 400;
// font-size: 30px;
// line-height: 38px;
// /* identical to box height */
// display: flex;
// align-items: center;
// text-align: center;
// letter-spacing: 0.05em;

// color: #1C7635;
