export function getSkillIcon(skill: string): string {
  const s = skill.toLowerCase().trim();
  switch (s) {
    case 'typescript':
      return '/skills/typescript.svg';
    case 'javascript':
    case 'js':
      return '/skills/javascript.svg';
    case 'react':
      return '/skills/react.svg';
    case 'next js':
    case 'nextjs':
      return '/skills/nextJS.svg';
    case 'node js':
    case 'nodejs':
      return '/skills/fastify.svg'; // node fallback
    case 'go':
    case 'golang':
      return '/skills/go.svg';
    case 'docker':
      return '/skills/docker.svg';
    case 'postgresql':
    case 'postgres':
      return '/skills/postgresql.svg';
    case 'mongodb':
      return '/skills/mongoDB.svg';
    case 'mysql':
      return '/skills/mysql.svg';
    case 'tailwind':
    case 'tailwindcss':
      return '/skills/tailwind.svg';
    case 'bootstrap':
      return '/skills/bootstrap.svg';
    case 'html':
      return '/skills/html.svg';
    case 'css':
      return '/skills/css.svg';
    case 'figma':
      return '/skills/figma.svg';
    case 'git':
      return '/skills/git.svg';
    case 'firebase':
      return '/skills/firebase.svg';
    case 'aws':
      return '/skills/aws.svg';
    case 'nginx':
      return '/skills/nginx.svg';
    case 'python':
      return '/skills/python.svg';
    case 'flutter':
      return '/skills/flutter.svg';
    case 'graphql':
      return '/skills/graphql.svg';
    case 'deno':
      return '/skills/deno.svg';
    case 'vue':
      return '/skills/vue.svg';
    case 'angular':
      return '/skills/angular.svg';
    default:
      return '/skills/react.svg';
  }
}
