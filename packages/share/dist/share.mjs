import { resolveComponent as c, createBlock as s, openBlock as l, withCtx as _, createTextVNode as u, renderSlot as a } from "vue";
const f = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [n, r] of o)
    e[n] = r;
  return e;
}, p = {};
function d(t, o) {
  const e = c("el-button");
  return l(), s(e, null, {
    default: _(() => [
      o[0] || (o[0] = u(" 我是share下的公共组件 ", -1)),
      a(t.$slots, "default")
    ]),
    _: 3
  });
}
const i = /* @__PURE__ */ f(p, [["render", d]]);
export {
  i as MyButton
};
