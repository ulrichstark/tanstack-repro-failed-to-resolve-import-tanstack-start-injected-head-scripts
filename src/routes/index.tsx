import { usedServerFunction } from "../functions";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
    loader: async () => usedServerFunction(),
    component: RouteComponent,
});

function RouteComponent() {
    const message = Route.useLoaderData();

    return <h1>{message}</h1>;
}
