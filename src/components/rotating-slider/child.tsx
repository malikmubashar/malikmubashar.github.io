import { pairs } from "./index";


export default function Child({ children, index }: { children: any, index: number }) {

    index >= pairs && (children.props['style'] = { ...children.props['style'], rotate: "180deg" });
    children.props['data-child'] = index;
    children.props['role'] = "button";

    return children;
}
