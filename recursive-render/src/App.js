import "./App.css";

function App(props) {
  const toggle = (id) => {
    const p = document.getElementById("p-" + id);
    const isVisible = p.style.display === "none";
    const toggleBtn = document.getElementById("toggle-" + id);
    toggleBtn.innerHTML = isVisible ? "V" : ">";
    p.style.display = isVisible ? "block" : "none";
  };

  const generateNesting = (n) => {
    if (n < 1) {
      return;
    }
    return (
      <div>
        <button onClick={() => toggle(n)} className={"toggle-" + n}>
          v
        </button>
        Hello
        <p className={"p-" + n}>{generateNesting(n - 1)}</p>
      </div>
    );
  };

  const generateJsonNesting = (obj) => {
    const children = Object.keys(obj);
    if (children.length === 0) {
      return;
    }

    return (
      <div>
        {children.map((child, index) => {
          return (
            <div>
              {typeof obj[child] !== "string" ? (
                <span>
                  <p onClick={() => toggle(child + "-" + index)}>
                    <span class="chevron" id={"toggle-" + child + "-" + index}>
                      V
                    </span>{" "}
                    {child}
                  </p>
                  <div id={"p-" + child + "-" + index}>
                    {generateJsonNesting(obj[child])}
                  </div>
                </span>
              ) : (
                child + ": " + obj[child]
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return generateJsonNesting(props.object);
}

export default App;
