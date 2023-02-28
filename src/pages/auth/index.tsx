import { GithubIcon } from "../../assets/icons/icon-github";
import { GoogleButtonLogin } from "../../components/google-button-login";
import * as styled from "./styled";

export function Auth() {
  return (
    <styled.Container>
      <div className="left-container">
        <h1>
          Bem vindo
          <br />
          ao Workflow
        </h1>
        <p>
          Phasellus tempus ipsum in massa interdum venenatis. Integer non quam
          lorem. Fusce tempus mauris mauris, et tincidunt dui porttitor quis.
          Duis egestas urna et velit sodales pharetra. Integer faucibus
          ultricies arcu ac volutpat. Vestibulum et felis felis. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas.
        </p>
        <p>
          Phasellus tempus ipsum in massa interdum venenatis. Integer non quam
          lorem. Fusce tempus mauris mauris, et tincidunt dui porttitor quis.
          Duis egestas urna et velit sodales pharetra. Integer faucibus
          ultricies arcu ac volutpat. Vestibulum et felis felis. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas.
        </p>
        <a href="https://github.com/Cauehcs/react-workflow" target="_blank">
          <GithubIcon />
        </a>
      </div>
      <div className="right-container">
        <GoogleButtonLogin />
      </div>
    </styled.Container>
  );
}
