export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e1b52b16a337c90dfae8122',
                  title: 'Sanity Studio',
                  name: 'mrs-sullivans-secrets-studio',
                  apiId: '35ba1aab-744b-4eac-97c1-abea31c041fa'
                },
                {
                  buildHookId: '5e1b52b187a3d9e470a30173',
                  title: 'Blog Website',
                  name: 'mrs-sullivans-secrets-web',
                  apiId: '4a2b668a-683e-4cc2-8dfe-7241b5397011'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/peterdurham/mrs-sullivans-secrets',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://mrs-sullivans-secrets-web.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
