import aws from "../app/assets/svg/skills/aws.svg";
import azure from "../app/assets/svg/skills/azure.svg";
import bootstrap from "../app/assets/svg/skills/bootstrap.svg";
import canva from "../app/assets/svg/skills/canva.svg";
import csharp from "../app/assets/svg/skills/csharp.svg";
import css from "../app/assets/svg/skills/css.svg";
import dart from "../app/assets/svg/skills/dart.svg";
import docker from "../app/assets/svg/skills/docker.svg";
import figma from "../app/assets/svg/skills/figma.svg";
import firebase from "../app/assets/svg/skills/firebase.svg";
import flutter from "../app/assets/svg/skills/flutter.svg";
import gcp from "../app/assets/svg/skills/gcp.svg";
import git from "../app/assets/svg/skills/git.svg";
import graphql from "../app/assets/svg/skills/graphql.svg";
import html from "../app/assets/svg/skills/html.svg";
import javascript from "../app/assets/svg/skills/javascript.svg";
import kotlin from "../app/assets/svg/skills/kotlin.svg";
import mongoDB from "../app/assets/svg/skills/mongoDB.svg";
import mysql from "../app/assets/svg/skills/mysql.svg";
import nextJS from "../app/assets/svg/skills/nextJS.svg";
import nginx from "../app/assets/svg/skills/nginx.svg";
import postgresql from "../app/assets/svg/skills/postgresql.svg";
import python from "../app/assets/svg/skills/python.svg";
import react from "../app/assets/svg/skills/react.svg";
import tailwind from "../app/assets/svg/skills/tailwind.svg";
import typescript from "../app/assets/svg/skills/typescript.svg";
import vite from "../app/assets/svg/skills/vitejs.svg";
import pandas from "../app/assets/svg/skills/pandas.svg";
import dotnetcore from "../app/assets/svg/skills/dotnetcore.svg";
import kubernetes from "../app/assets/svg/skills/kubernetes.svg";
import linux from "../app/assets/svg/skills/linux.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "gcp":
      return gcp;
    case "html":
      return html;
    case "css":
      return css;
    case "docker":
      return docker;
    case "javascript":
      return javascript;
    case "next js":
      return nextJS;
    case "react":
      return react;
    case "typescript":
      return typescript;
    case "bootstrap":
      return bootstrap;
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "postgresql":
      return postgresql;
    case "tailwind":
      return tailwind;
    case "vite":
      return vite;
    case "c#":
      return csharp;
    case "dart":
      return dart;
    case "kotlin":
      return kotlin;
    case "python":
      return python;
    case "aws":
      return aws;
    case "firebase":
      return firebase;
    case "git":
      return git;
    case "graphql":
      return graphql;
    case "nginx":
      return nginx;
    case "azure":
      return azure;
    case "figma":
      return figma;
    case "flutter":
      return flutter;
    case "canva":
      return canva;
    case "pandas":
      return pandas;
    case ".net core":
      return dotnetcore;
    case "kubernetes":
      return kubernetes;
    case "linux":
      return linux;
    default:
      break;
  }
};
