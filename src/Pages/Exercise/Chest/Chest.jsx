import React from 'react';

const dummyPosts = [
  {
    id: 1,
    slug: 'first-post',
    title: 'First Post',
    content: 'This is the content of the first post.',
    status: 'Published',
    publishedAt: '2023-06-01',
  },
  {
    id: 2,
    slug: 'second-post',
    title: 'Second Post',
    content: 'This is the content of the second post.',
    status: 'Draft',
    publishedAt: '2023-06-02',
  },
  {
    id: 3,
    slug: 'third-post',
    title: 'Third Post',
    content: 'This is the content of the third post.',
    status: 'Published',
    publishedAt: '2023-06-03',
  },
];

const Chest = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 bg-white border border-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Heading</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Content</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pub. At</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {dummyPosts.map((post) => (
            <tr key={post.id} className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap">{post.slug}</td>
              <td className="px-6 py-4 whitespace-nowrap">{post.title.substring(0, 20)}...</td>
              <td className="px-6 py-4 whitespace-nowrap">{post.content.substring(0, 20)}...</td>
              <td className="px-6 py-4 whitespace-nowrap">{post.status}</td>
              <td className="px-6 py-4 whitespace-nowrap">{post.publishedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Chest;
