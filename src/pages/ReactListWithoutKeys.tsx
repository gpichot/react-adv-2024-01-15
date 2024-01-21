import React from "react";

/*
On peut observer les modifications effectuées par React en mettant
des breakpoints sur la modification des éléments dans les DevTools.
Il faut par contre désactiver dans les options des DevTools l'option
"Enable Ignore List" (onglet Ignore List)
 */

function createItems(version?: 1 | 2) {
  const baseItems = [
    { id: "straw", label: "Strawberry" },
    { id: "rasp", label: "Raspberry" },
    { id: "cran", label: "Cranberry" },
  ];

  if (version === 1) {
    const [, ...rest] = baseItems;
    return rest;
  }

  return baseItems;
}

function Item({ children }: { children: React.ReactNode }) {
  const elementRef = React.useRef<HTMLSpanElement>(null);
  const renderCountRef = React.useRef(0);

  React.useLayoutEffect(() => {
    renderCountRef.current += 1;
    if (elementRef.current) {
      elementRef.current.textContent = String(renderCountRef.current);
    }
  });

  return (
    <div>
      <span ref={elementRef}></span>
      <div>{children}</div>
      <input type="text" />
    </div>
  );
}

export default function ReactListWithoutKeys() {
  const [count, forceUpdate] = React.useReducer((c) => c + 1, 0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      forceUpdate();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const items = createItems(count % 2 === 0 ? 1 : 2);

  return (
    <div>
      <button onClick={forceUpdate}>Re-render</button>
      <div>
        {items.map((item) => (
          <Item>{item.label}</Item>
        ))}
      </div>
    </div>
  );
}
