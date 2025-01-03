import {
    CardItem,
    CardSections,
    docType,
  } from "@site/src/components/LandingPage/TutorialCard";
import { MODULES } from "@site/src/constants";
  
  /* Define the cards - start */
  
  // Docs
  export const docsCards: CardSections = [
    {
      name: "Overview",
      description: "",
      list: [
        {
          title: "Overview",
          module: MODULES.cde,
          description:
            "Learn how Harness enhances developer experience with pre-configured cloud development environments.",
          link: "/docs/cloud-development-environments/overview",
        },
      ],
    },
    {
      name: "Get Started",
      description: "",
      list: [
        {
          title: "What's Supported",
          module: MODULES.cde,
          description:
            "Learn more about the providers supported by Harness Gitspaces.",
          link: "/docs/cloud-development-environments/introduction/whats-supported",
        },
        {
          title: "Getting Started with Gitspaces",
          module: MODULES.cde,
          description: "Get started by setting up and configuring your Gitspaces.",
          link: "/docs/cloud-development-environments/introduction/getting-started-with-cde",
        },
        {
          title: "Beta Plan Usage",
          module: MODULES.cde,
          description: "Learn more about the Harness Gitspaces Beta Plan.",
          link: "/docs/cloud-development-environments/introduction/beta-usage",
        },
      ],
    },
    {
      name: "Deep Dive into Gitspaces",
      description: "",
      list: [
        {
          title: "Gitspace Configuration",
          module: MODULES.cde,
          description:
            "Learn more about the underlying configuration of a Gitspace. ",
          link: "/docs/cloud-development-environments/deep-dive-into-gitspaces/gitspace-configuration",
        },
        {
          title: "Gitspace Lifecycle",
          module: MODULES.cde,
          description: "Understand the different stages in the life of a Gitspace.",
          link: "/docs/cloud-development-environments/deep-dive-into-gitspaces/lifecycle-of-gitspaces",
        },
      ],
    },
    {
      name: "Features of Gitspaces",
      description: "",
      list: [
        {
          title: "Authentication",
          module: MODULES.cde,
          description:
            "Learn how to configure a Git provider for authentication.",
          link: "/docs/cloud-development-environments/features-of-gitspaces/authentication",
        },{
          title: "Auto-Stopping",
          module: MODULES.cde,
          description:
            "Learn more about why Harness auto-stops inactive Gitspaces. ",
          link: "/docs/cloud-development-environments/features-of-gitspaces/auto-stopping",
        },{
          title: "Environment Variables",
          module: MODULES.cde,
          description:
            "Learn how to define environment variables for your development.",
          link: "/docs/cloud-development-environments/features-of-gitspaces/env-variables",
        },
        {
          title: "Tracking Changes",
          module: MODULES.cde,
          description: "Learn how to track all Gitspace changes from Harness UI.",
          link: "/docs/cloud-development-environments/features-of-gitspaces/tracking-changes",
        },
      ],
    },
    {
      name: "IDEs",
      description: "",
      list: [
        {
          title: "VS Code Browser",
          module: MODULES.cde,
          description:
            "Connect to your Gitspaces within VS Code Browser",
          link: "/docs/cloud-development-environments/ide's/vs-code-browser",
        },
        {
          title: "VS Code Desktop",
          module: MODULES.cde,
          description: "Connect to your Gitspaces within VS Code Desktop",
          link: "/docs/cloud-development-environments/ide's/vs-code-desktop",
        },
      ],
    },
    {
      name: "Managing Gitspaces",
      description: "",
      list: [
        {
          title: "Create a Gitspace",
          module: MODULES.cde,
          description: "Learn how to create a new Gitspace",
          link: "/docs/cloud-development-environments/manage-gitspaces/create-gitspaces",
        },
        {
          title: "Delete a Gitspace",
          module: MODULES.cde,
          description: "Learn how to delete an existing Gitspace",
          link: "/docs/cloud-development-environments/manage-gitspaces/delete-gitspaces",
        },
        {
          title: "Start/Stop a Gitspace",
          module: MODULES.cde,
          description: "Learn how to start/stop an existing Gitspace",
          link: "/docs/cloud-development-environments/manage-gitspaces/existing-gitspaces",
        },
      ],
    },
    {
      name: "Developing in Gitspaces",
      description: "",
      list: [
        {
          title: "Source Control",
          module: MODULES.cde,
          description: "Learn how to execute various Git functions directly in your Gitspace.",
          link: "/docs/cloud-development-environments/develop-using-cde/source-control",
        },
        {
          title: "Port Forward",
          module: MODULES.cde,
          description: "Port Forwarding in CDE",
          link: "/docs/cloud-development-environments/develop-using-cde/forward-ports",
        },
      ],
    }
  ];