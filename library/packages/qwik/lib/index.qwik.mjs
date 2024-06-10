import { componentQrl, inlinedQrl, useStylesScopedQrl, useStore, useTaskQrl, useLexicalScope, _jsxQ, _fnSignal, _jsxC } from "@builder.io/qwik";
const setInputValue = function setInputValue2(props, state, value) {
  state.inputVal = value;
};
const handleClick = function handleClick2(props, state, item) {
  setInputValue(props, state, transform(props, state, item));
  state.showSuggestions = false;
};
const fetchVals = function fetchVals2(props, state, city) {
  if (props.getValues)
    return props.getValues(city);
  return fetch(`http://universities.hipolabs.com/search?name=${city}&country=united+states`).then((x) => x.json());
};
const transform = function transform2(props, state, x) {
  return props.transformData ? props.transformData(x) : x.name;
};
const AutoComplete = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  useStylesScopedQrl(/* @__PURE__ */ inlinedQrl(STYLES$1, "AutoComplete_component_useStylesScoped_0FprNR9i0NU"));
  const state = useStore({
    inputVal: "",
    showSuggestions: false,
    suggestions: []
  });
  useTaskQrl(/* @__PURE__ */ inlinedQrl(({ track }) => {
    const [props2, state2] = useLexicalScope();
    track(() => state2.inputVal);
    track(() => props2.getValues);
    fetchVals(props2, state2, state2.inputVal).then((newVals) => {
      if (!newVals?.filter) {
        console.error("Invalid response from getValues:", newVals);
        return;
      }
      state2.suggestions = newVals.filter((data) => transform(props2, state2, data).toLowerCase().includes(state2.inputVal.toLowerCase()));
    });
  }, "AutoComplete_component_useTask_27rSx5jJEiA", [
    props,
    state
  ]));
  return /* @__PURE__ */ _jsxQ("div", null, {
    class: "div-AutoComplete"
  }, [
    "Autocomplete:",
    /* @__PURE__ */ _jsxQ("div", null, {
      class: "div-AutoComplete-2"
    }, [
      /* @__PURE__ */ _jsxQ("input", {
        onChange$: /* @__PURE__ */ inlinedQrl((event) => {
          const [state2] = useLexicalScope();
          return state2.inputVal = event.target.value;
        }, "AutoComplete_component_div_div_input_onChange_6hULAd0vl2E", [
          state
        ]),
        onFocus$: /* @__PURE__ */ inlinedQrl((event) => {
          const [state2] = useLexicalScope();
          return state2.showSuggestions = true;
        }, "AutoComplete_component_div_div_input_onFocus_MUqdE4QWY1k", [
          state
        ])
      }, {
        class: "input-AutoComplete",
        placeholder: "Search for a U.S. university",
        value: _fnSignal((p0) => p0.inputVal, [
          state
        ], "p0.inputVal")
      }, null, 2, null),
      /* @__PURE__ */ _jsxQ("button", {
        onClick$: /* @__PURE__ */ inlinedQrl((event) => {
          const [state2] = useLexicalScope();
          state2.inputVal = "";
          state2.showSuggestions = false;
        }, "AutoComplete_component_div_div_button_onClick_EmWxEDndAz4", [
          state
        ])
      }, {
        class: "button-AutoComplete"
      }, "X", 2, null)
    ], 1, null),
    state.suggestions.length > 0 && state.showSuggestions ? /* @__PURE__ */ _jsxQ("ul", null, {
      class: "ul-AutoComplete"
    }, (state.suggestions || []).map((item, idx) => {
      return /* @__PURE__ */ _jsxQ("li", {
        onClick$: /* @__PURE__ */ inlinedQrl((event) => {
          const [item2, props2, state2] = useLexicalScope();
          return handleClick(props2, state2, item2);
        }, "AutoComplete_component_div_ul_li_onClick_00iZrqmJrSk", [
          item,
          props,
          state
        ])
      }, {
        class: "li-AutoComplete"
      }, props.renderChild ? /* @__PURE__ */ _jsxC(props.renderChild, {
        item
      }, 3, "y0_0") : /* @__PURE__ */ _jsxQ("span", null, null, transform(props, state, item), 1, null), 0, idx);
    }), 1, "y0_1") : null
  ], 1, "y0_2");
}, "AutoComplete_component_SUwebZSI2HA"));
const STYLES$1 = `
.div-AutoComplete {
  padding: 10px;
  max-width: 700px;
}
.div-AutoComplete-2 {
  position: relative;
  display: flex;
  gap: 16px;
  align-items: stretch;
}
.input-AutoComplete {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.25rem;
  border-width: 1px;
  border-color: #000000;
  width: 100%;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.button-AutoComplete {
  cursor: pointer;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.25rem;
  color: #ffffff;
  background-color: #ef4444;
}
.ul-AutoComplete {
  border-radius: 0.25rem;
  height: 10rem;
  margin: unset;
  padding: unset;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.li-AutoComplete {
  display: flex;
  padding: 0.5rem;
  align-items: center;
  border-bottom-width: 1px;
  border-color: #e5e7eb;
  cursor: pointer;
}
.li-AutoComplete:hover {
  background-color: #f3f4f6;
}
`;
const Greet = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const state = useStore({
    name: ""
  });
  return /* @__PURE__ */ _jsxQ("div", null, null, [
    /* @__PURE__ */ _jsxQ("input", {
      onChange$: /* @__PURE__ */ inlinedQrl((event) => {
        const [state2] = useLexicalScope();
        return state2.name = event.target.value;
      }, "Greet_component_div_input_onChange_qPzeTWoYLyU", [
        state
      ])
    }, {
      placeholder: "Your name",
      value: _fnSignal((p0) => p0.name, [
        state
      ], "p0.name")
    }, null, 2, null),
    /* @__PURE__ */ _jsxQ("div", null, null, [
      "Hello, ",
      _fnSignal((p0) => p0.name, [
        state
      ], "p0.name"),
      "!"
    ], 3, null)
  ], 1, "g0_0");
}, "Greet_component_nEQJf50Xoc8"));
const addItem = function addItem2(props, state) {
  if (!state.newItemName)
    return;
  state.list = [
    ...state.list,
    state.newItemName
  ];
};
const deleteItem = function deleteItem2(props, state, idx) {
  state.list = state.list.filter((x, i) => i !== idx);
};
const TodoApp = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  useStylesScopedQrl(/* @__PURE__ */ inlinedQrl(STYLES, "TodoApp_component_useStylesScoped_h0RfHVJErY0"));
  const state = useStore({
    list: [
      "hello",
      "world"
    ],
    newItemName: ""
  });
  return /* @__PURE__ */ _jsxQ("div", null, {
    class: "div-TodoApp"
  }, [
    /* @__PURE__ */ _jsxQ("span", null, null, "TO-DO list:", 3, null),
    /* @__PURE__ */ _jsxQ("div", null, {
      class: "div-TodoApp-2"
    }, [
      /* @__PURE__ */ _jsxQ("input", {
        onChange$: /* @__PURE__ */ inlinedQrl((event) => {
          const [state2] = useLexicalScope();
          return state2.newItemName = event.target.value;
        }, "TodoApp_component_div_div_input_onChange_hSKWsf0uwzU", [
          state
        ])
      }, {
        class: "input-TodoApp",
        placeholder: "Add a new item",
        value: _fnSignal((p0) => p0.newItemName, [
          state
        ], "p0.newItemName")
      }, null, 2, null),
      /* @__PURE__ */ _jsxQ("button", {
        onClick$: /* @__PURE__ */ inlinedQrl((event) => {
          const [props2, state2] = useLexicalScope();
          return addItem(props2, state2);
        }, "TodoApp_component_div_div_button_onClick_c1D0P15Q3NE", [
          props,
          state
        ])
      }, {
        class: "button-TodoApp"
      }, "Add", 2, null)
    ], 1, null),
    /* @__PURE__ */ _jsxQ("div", null, {
      class: "div-TodoApp-3"
    }, /* @__PURE__ */ _jsxQ("ul", null, {
      class: "ul-TodoApp"
    }, (state.list || []).map((item, idx) => {
      return /* @__PURE__ */ _jsxQ("li", null, {
        class: "li-TodoApp"
      }, [
        /* @__PURE__ */ _jsxQ("span", null, null, item, 1, null),
        /* @__PURE__ */ _jsxQ("button", {
          onClick$: /* @__PURE__ */ inlinedQrl((event) => {
            const [idx2, props2, state2] = useLexicalScope();
            deleteItem(props2, state2, idx2);
          }, "TodoApp_component_div_div_ul_li_button_onClick_ImLvt4DxtEw", [
            idx,
            props,
            state
          ])
        }, {
          class: "button-TodoApp-2"
        }, "Delete", 2, null)
      ], 1, idx);
    }), 1, null), 1, null)
  ], 1, "G7_0");
}, "TodoApp_component_8OGo00Oo8Jw"));
const STYLES = `
.div-TodoApp {
  padding: 10px;
  max-width: 700px;
}
.div-TodoApp-2 {
  display: flex;
  width: 100%;
  gap: 16px;
  align-items: stretch;
}
.input-TodoApp {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.25rem;
  flex-grow: 1;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.button-TodoApp {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.25rem;
  font-weight: 700;
  color: #ffffff;
  background-color: #3b82f6;
  cursor: pointer;
}
.div-TodoApp-3 {
  margin-top: 1rem;
}
.ul-TodoApp {
  border-radius: 0.25rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin: unset;
  padding: unset;
}
.li-TodoApp {
  display: flex;
  padding: 0.625rem;
  align-items: center;
  border-bottom-width: 1px;
  border-color: #e5e7eb;
  gap: 16px;
}
.button-TodoApp-2 {
  cursor: pointer;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.25rem;
  color: #ffffff;
  background-color: #ef4444;
}
`;
export {
  AutoComplete,
  Greet,
  TodoApp as Todos
};
