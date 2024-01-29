import { Time } from "./Time";

const StateBar = () => {
  return (
    <div className="state-bar flex justify-between text-white">
      <Time />
      <section className="flex gap-2">
        <i className="bi bi-reception-4"></i>
        <i className="bi bi-wifi"></i>
        <i className="bi bi-battery-full"></i>
      </section>
    </div>
  );
};

export { StateBar };
