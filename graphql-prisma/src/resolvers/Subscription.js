import getUserId from '../utils/getUserId'
const Subscription = {
  comment: {
    subscribe(parent, { postId }, { db, pubsub, prisma }, info) {
      return prisma.subscription.comment(
        {
          where: {
            node: {
              post: {
                id: postId
              }
            }
          }
        },
        info
      )
    }
  },
  post: {
    subscribe(parent, args, { pubsub, prisma }, info) {
      return prisma.subscription.post(
        {
          where: {
            node: {
              published: true
            }
          }
        },
        info
      )
    }
  },
  myPost: {
    subscribe(parent, args, { pubsub, prisma, request }, info) {
      const userId = getUserId(request)
      return prisma.subscription.post(
        {
          where: {
            node: {
              author: { id: userId }
            }
          }
        },
        info
      )
    }
  }
}

export { Subscription as default }
