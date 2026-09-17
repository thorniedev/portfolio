export interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
}

export interface GitHubActivityEvent {
  id: string;
  type: string;
  repoName: string;
  repoUrl: string;
  branch: string;
  createdAt: string;
}

export interface GitHubRepo {
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  html_url: string;
  updated_at: string;
}

const FALLBACK_USER: GitHubUser = {
  login: 'thorniedev',
  name: 'Kim Chanthorn',
  avatar_url: 'https://avatars.githubusercontent.com/u/142141698?v=4',
  html_url: 'https://github.com/thorniedev',
  bio: 'Full-Stack Developer • CS&E from RUPP & Full-Stack at ISTAD',
  public_repos: 36,
  followers: 2,
  following: 8,
};

const FALLBACK_EVENTS: GitHubActivityEvent[] = [
  {
    id: 'e1',
    type: 'PushEvent',
    repoName: 'thorniedev/portfolio',
    repoUrl: 'https://github.com/thorniedev/portfolio',
    branch: 'main',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'e2',
    type: 'PushEvent',
    repoName: 'thorniedev/foodhub-admin',
    repoUrl: 'https://github.com/thorniedev/foodhub-admin',
    branch: 'main',
    createdAt: new Date(Date.now() - 4 * 86400000).toISOString(),
  },
  {
    id: 'e3',
    type: 'PushEvent',
    repoName: 'thorniedev/foodhub-frontend',
    repoUrl: 'https://github.com/thorniedev/foodhub-frontend',
    branch: 'main',
    createdAt: new Date(Date.now() - 4 * 86400000).toISOString(),
  },
  {
    id: 'e4',
    type: 'PushEvent',
    repoName: 'thorniedev/ITE-Gen3-SpringBoot',
    repoUrl: 'https://github.com/thorniedev/ITE-Gen3-SpringBoot',
    branch: 'main',
    createdAt: new Date(Date.now() - 60 * 86400000).toISOString(),
  },
];

const FALLBACK_REPOS: GitHubRepo[] = [
  {
    name: 'portfolio',
    description: 'Personal developer portfolio built with Next.js App Router, TypeScript, and Tailwind CSS.',
    language: 'TypeScript',
    stars: 1,
    html_url: 'https://github.com/thorniedev/portfolio',
    updated_at: new Date().toISOString(),
  },
  {
    name: 'foodhub-admin',
    description: 'Admin dashboard for food ordering and management platform.',
    language: 'TypeScript',
    stars: 0,
    html_url: 'https://github.com/thorniedev/foodhub-admin',
    updated_at: '2026-09-13T02:27:46Z',
  },
  {
    name: 'foodhub-frontend',
    description: 'FoodHub customer application and delivery UI.',
    language: 'TypeScript',
    stars: 0,
    html_url: 'https://github.com/thorniedev/foodhub-frontend',
    updated_at: '2026-09-13T02:27:03Z',
  },
  {
    name: 'ITE-Gen3-SpringBoot',
    description: 'Spring Boot REST APIs and backend microservices architecture.',
    language: 'Java',
    stars: 1,
    html_url: 'https://github.com/thorniedev/ITE-Gen3-SpringBoot',
    updated_at: '2026-07-10T13:08:28Z',
  },
  {
    name: 'iam',
    description: 'Identity & Access Management service with OAuth2 / JWT authentication.',
    language: 'TypeScript',
    stars: 1,
    html_url: 'https://github.com/thorniedev/iam',
    updated_at: '2026-07-11T14:42:14Z',
  },
];

export async function getGitHubUser(username: string = 'thorniedev'): Promise<GitHubUser> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      headers: { Accept: 'application/vnd.github.v3+json' },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return FALLBACK_USER;
    const data = await res.json();
    return {
      login: data.login || FALLBACK_USER.login,
      name: data.name || FALLBACK_USER.name,
      avatar_url: data.avatar_url || FALLBACK_USER.avatar_url,
      html_url: data.html_url || FALLBACK_USER.html_url,
      bio: data.bio || FALLBACK_USER.bio,
      public_repos: typeof data.public_repos === 'number' ? data.public_repos : FALLBACK_USER.public_repos,
      followers: typeof data.followers === 'number' ? data.followers : FALLBACK_USER.followers,
      following: typeof data.following === 'number' ? data.following : FALLBACK_USER.following,
    };
  } catch {
    return FALLBACK_USER;
  }
}

export async function getGitHubRecentEvents(
  username: string = 'thorniedev'
): Promise<GitHubActivityEvent[]> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}/events/public?per_page=12`, {
      headers: { Accept: 'application/vnd.github.v3+json' },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return FALLBACK_EVENTS;
    const events = await res.json();
    if (!Array.isArray(events)) return FALLBACK_EVENTS;

    const filtered: GitHubActivityEvent[] = [];
    for (const e of events) {
      if (e.type === 'PushEvent' || e.type === 'CreateEvent') {
        const branch = (e.payload?.ref || 'main').replace('refs/heads/', '');
        filtered.push({
          id: String(e.id),
          type: e.type,
          repoName: e.repo?.name || `${username}/repository`,
          repoUrl: `https://github.com/${e.repo?.name || username}`,
          branch,
          createdAt: e.created_at || new Date().toISOString(),
        });
      }
      if (filtered.length >= 4) break;
    }

    return filtered.length > 0 ? filtered : FALLBACK_EVENTS;
  } catch {
    return FALLBACK_EVENTS;
  }
}

export async function getGitHubRepos(username: string = 'thorniedev'): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=8`, {
      headers: { Accept: 'application/vnd.github.v3+json' },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return FALLBACK_REPOS;
    const data = await res.json();
    if (!Array.isArray(data)) return FALLBACK_REPOS;

    return data
      .filter((r) => !r.fork && r.name !== 'ThornieDev')
      .slice(0, 4)
      .map((r) => ({
        name: r.name,
        description: r.description || 'Open source project by Kim Chanthorn.',
        language: r.language || 'Code',
        stars: r.stargazers_count || 0,
        html_url: r.html_url,
        updated_at: r.updated_at,
      }));
  } catch {
    return FALLBACK_REPOS;
  }
}
