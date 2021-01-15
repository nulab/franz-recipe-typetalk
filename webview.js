module.exports = (Franz) => {
  const className = 'is_new';
  const topicsIndex = 0;
  const dmIndex = 1;
  const notificationsIndex = 2;
  const likesActivitiesIndex = 3;

  const hasUnreads = (sidebarItems, index) => {
    if (!sidebarItems || sidebarItems.length < 1) {
      return 0;
    }
    const sidebarItem = sidebarItems[index];
    return Number(sidebarItem.classList.contains(className));
  };

  const getUnreads = () => {
    const sidebarItems = document.getElementsByClassName(".sidebar__item");
    const indirectMessages = hasUnreads(sidebarItems, topicsIndex) + hasUnreads(sidebarItems, likesActivitiesIndex);
    const directMessages = hasUnreads(sidebarItems, dmIndex) + hasUnreads(sidebarItems, notificationsIndex);

    Franz.setBadge(directMessages, indirectMessages);
  };

  Franz.loop(getUnreads);
};
