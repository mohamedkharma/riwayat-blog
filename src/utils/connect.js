import { PrismaClient } from '@prisma/client'
let prisma
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

// to delete a post based on the title 
// async function deletePostByTitle(postTitle) {
//   const prisma = new PrismaClient();

//   try {
//       // Find the post with the given title
//       const post = await prisma.post.findFirst({
//           where: {
//               title: postTitle,
//           },
//       });

//       if (!post) {
//           console.log('Post not found.');
//           return;
//       }

//       // Delete the post found by its ID
//       const deletedPost = await prisma.post.delete({
//           where: {
//               id: post.id,
//           },
//       });

//       console.log('Post deleted successfully:', deletedPost);
//   } catch (error) {
//       console.error('Error deleting post:', error);
//   } finally {
//       await prisma.$disconnect();
//   }
// }

// // Specify the title of the post you want to delete
// const postTitleToDelete = 'aa';

// // Call the function to delete the post by its title
// deletePostByTitle(postTitleToDelete);

export default prisma