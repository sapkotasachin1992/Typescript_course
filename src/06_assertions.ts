const raw = '{"id" : 1, "name" : "A"}';

// const riskyUser = JSON.parse(raw) as { id: number; name: string };

// console.log(riskyUser.name);

type User22 = { id: number; name: string };

function isUser(v: unknown): v is User22 {
    return (
        typeof v === "object" &&
        v !== null &&
        "id" in v &&
        typeof (v as any).id === "number" && //we did v as any so that ts stop complaining is for now v is unknown
        "name" in v &&
        typeof (v as any).name === "string"
    );
}

const maybe = JSON.parse(raw) as unknown;
if (isUser(maybe)) {
    console.log(maybe.name); //safe
}