/* eslint-disable sort-keys-fix/sort-keys-fix */
// src/components/SVGIcon.js
import {useTheme} from '@react-navigation/native';
import React from 'react';

import DraftsIcon from '../assets/icons/channel-list/drafts.svg';
import NewMessageBubbleIcon from '../assets/icons/channel-list/new-message.svg';
import ThreadsIcon from '../assets/icons/channel-list/threads.svg';
import FileAttachmentIcon from '../assets/icons/channel/attachment.svg';
import BackButtonIcon from '../assets/icons/channel/back-button.svg';
import CloseButtonIcon from '../assets/icons/channel/close-button.svg';
import EmojiIcon from '../assets/icons/channel/emoji.svg';
import FormattingIcon from '../assets/icons/channel/formating.svg';
import InfoIcon from '../assets/icons/channel/info.svg';
import ImageAttachmentIcon from '../assets/icons/channel/picture.svg';
import SearchIcon from '../assets/icons/channel/search.svg';
import SendButton from '../assets/icons/channel/send-button.svg';
import ShortcutsIcon from '../assets/icons/channel/shortcuts.svg';
import CopyTextIcon from '../assets/icons/message/copy-text.svg';
import DeleteTextIcon from '../assets/icons/message/delete.svg';
import EditTextIcon from '../assets/icons/message/edit.svg';
import AwayIcon from '../assets/icons/profile/away.svg';
import DNDIcon from '../assets/icons/profile/dnd.svg';
import NotificationsIcon from '../assets/icons/profile/notifications.svg';
import PreferencesIcon from '../assets/icons/profile/preferences.svg';
import SavedItemsIcon from '../assets/icons/profile/saved-items.svg';
import ViewProfileIcon from '../assets/icons/profile/view-profile.svg';
import DMTabIconActive from '../assets/icons/tab-bar/dm-selected.svg';
import DMTabIcon from '../assets/icons/tab-bar/dm.svg';
import NotificationsTabIconActive from '../assets/icons/tab-bar/bell-selected.svg';
import NotificationsTabIcon from '../assets/icons/tab-bar/bell.svg';
import HomeTabIconActive from '../assets/icons/tab-bar/home-selected.svg';
import HomeTabIcon from '../assets/icons/tab-bar/home.svg';
import MentionsTabIconActive from '../assets/icons/tab-bar/mentions-selected.svg';
import MentionsTabIcon from '../assets/icons/tab-bar/mentions.svg';
import GlobalSearchSelectedIcon from '../assets/icons/tab-bar/search-selected.svg';
import GlobalSearchIcon from '../assets/icons/tab-bar/search.svg';
import YouTabIconActive from '../assets/icons/tab-bar/you-selected.svg';
import YouTabIcon from '../assets/icons/tab-bar/you.svg';

const iconMap = {
  // Tab related icons
  'home-tab': HomeTabIcon,
  'home-tab-active': HomeTabIconActive,
  'search-tab': GlobalSearchIcon,
  'search-tab-active': GlobalSearchSelectedIcon,
  'mentions-tab': MentionsTabIcon,
  'mentions-tab-active': MentionsTabIconActive,
  // 'notifications-tab': NotificationsTabIcon,
  // 'notifications-tab-active': NotificationsTabIconActive,
  'dm-tab': DMTabIcon,
  'dm-tab-active': DMTabIconActive,
  'you-tab': YouTabIcon,
  'you-tab-active': YouTabIconActive,

  // Profile page icons
  away: AwayIcon,
  dnd: DNDIcon,
  notifications: NotificationsIcon,
  preferences: PreferencesIcon,
  'saved-items': SavedItemsIcon,
  'view-profile': ViewProfileIcon,

  // Icons on input box
  'input-buttons-formatting': FormattingIcon,
  'input-buttons-mentions': MentionsTabIcon,
  'input-buttons-send': SendButton,
  'input-buttons-shortcuts': ShortcutsIcon,
  'file-attachment': FileAttachmentIcon,
  'image-attachment': ImageAttachmentIcon,

  // actionsheet icons
  'copy-text': CopyTextIcon,
  'delete-text': DeleteTextIcon,
  emoji: EmojiIcon,

  // Channel list icons
  drafts: DraftsIcon,
  threads: ThreadsIcon,
  'new-message': NewMessageBubbleIcon,

  // Channel header
  'back-button': BackButtonIcon,
  'close-button': CloseButtonIcon,
  info: InfoIcon,
  'edit-text': EditTextIcon,
  search: SearchIcon,
};

export const SVGIcon = ({fill, height, type, width}) => {
  const {colors} = useTheme();
  const Component = iconMap[type];

  return <Component fill={fill || colors.icon} height={height} width={width} />;
};
