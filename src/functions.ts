import { createServerFn } from "@tanstack/react-start";
import { getCookies } from "@tanstack/react-start/server";

export const usedServerFunction = createServerFn().handler(() => {
    return "Hello World!";
});

function unusedFunction() {
    getCookies();
}
