import { defineField, defineType } from "sanity";

export const waitlistSubmission = defineType({
  name: "waitlistSubmission",
  title: "Waitlist Submission",
  type: "document",
  fields: [
    defineField({
      name: "companyName",
      title: "Company Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "website",
      title: "Website URL",
      type: "url",
    }),
    defineField({
      name: "country",
      title: "Country",
      type: "string",
    }),
    defineField({
      name: "monthlyOrderVolume",
      title: "Monthly Order Volume",
      type: "string",
    }),
    defineField({
      name: "salesChannel",
      title: "Main Sales Channel",
      type: "string",
    }),
    defineField({
      name: "biggestChallenge",
      title: "Biggest Fulfilment Challenge",
      type: "text",
    }),
    defineField({
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
  ],
  orderings: [
    {
      title: "Newest first",
      name: "submittedAtDesc",
      by: [{ field: "submittedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "companyName",
      subtitle: "email",
      submittedAt: "submittedAt",
    },
    prepare({ title, subtitle, submittedAt }) {
      return {
        title,
        subtitle: submittedAt ? `${subtitle} · ${new Date(submittedAt).toLocaleString()}` : subtitle,
      };
    },
  },
});
