import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-07-08";

export const hasSanityConfig = Boolean(projectId && dataset);

export const sanityClient = createClient({
    projectId: projectId ?? "5hpvdku9",
    dataset: dataset ?? "production",
    apiVersion,
    useCdn: true,
});

export const hasSanityWriteConfig = Boolean(projectId && dataset && process.env.SANITY_API_WRITE_TOKEN);

export const sanityWriteClient = createClient({
    projectId: projectId ?? "5hpvdku9",
    dataset: dataset ?? "production",
    apiVersion,
    token: process.env.SANITY_API_WRITE_TOKEN,
    useCdn: false,
});
