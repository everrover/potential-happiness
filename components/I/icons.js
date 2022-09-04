import React from 'react'
import styles from './styles.module.scss'

import { ReactComponent as BookmarkIcon } from '../../public/icons/bookmark.svg'
import { ReactComponent as BookIcon } from '../../public/icons/book.svg'
import { ReactComponent as HeartIcon } from '../../public/icons/heart.svg'
import { ReactComponent as HeartSolidIcon } from '../../public/icons/heart-solid.svg'
import { ReactComponent as ChevronDown } from '../../public/icons/chevron-down.svg'
import { ReactComponent as ChevronUp } from '../../public/icons/chevron-up.svg'
import { ReactComponent as ChevronRight } from '../../public/icons/chevron-right.svg'
import { ReactComponent as ChevronLeft } from '../../public/icons/chevron-left.svg'
import { ReactComponent as ArrowLeft } from '../../public/icons/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../../public/icons/arrow-right.svg'
import { ReactComponent as ArrowUp } from '../../public/icons/arrow-up.svg'
import { ReactComponent as ArrowDown } from '../../public/icons/arrow-down.svg'
import { ReactComponent as BarsIcon } from '../../public/icons/bars.svg'
import { ReactComponent as TimesIcon } from '../../public/icons/times.svg'
import { ReactComponent as TelescopeIcon } from '../../public/icons/telescope.svg'
import { ReactComponent as TagsIcon } from '../../public/icons/tags.svg'
import { ReactComponent as TagIcon } from '../../public/icons/tag.svg'
import { ReactComponent as ScrollOldIcon } from '../../public/icons/scroll-old.svg'
import { ReactComponent as PenIcon } from '../../public/icons/pen.svg'
import { ReactComponent as PaperPlaneIcon } from '../../public/icons/paper-plane.svg'
import { ReactComponent as IndianFeatherIcon } from '../../public/icons/indian-feather.svg'
import { ReactComponent as HomeIcon } from '../../public/icons/home.svg'
import { ReactComponent as HomeLargeIcon } from '../../public/icons/home-lg.svg'
import { ReactComponent as HashTag } from '../../public/icons/hashtag.svg'
import { ReactComponent as FeatherIcon } from '../../public/icons/feather.svg'
import { ReactComponent as CircleIcon } from '../../public/icons/circle.svg'
import { ReactComponent as CopyIcon } from '../../public/icons/copy.svg'
import { ReactComponent as BugIcon } from '../../public/icons/bug.svg'
import { ReactComponent as BriefcaseIcon } from '../../public/icons/briefcase.svg'
import { ReactComponent as Github } from '../../public/brands/github.svg'
import { ReactComponent as Instagram } from '../../public/brands/instagram.svg'
import { ReactComponent as LinkedIn } from '../../public/brands/linkedin.svg'
import { ReactComponent as Twitter } from '../../public/brands/twitter.svg'
import { ReactComponent as Reddit } from '../../public/brands/reddit-alien.svg'

const icons = {
  'arrow-left': <ArrowLeft className={styles["er-icon"]}/>,
  'arrow-right': <ArrowRight className={styles["er-icon"]}/>,
  'arrow-up': <ArrowUp className={styles["er-icon"]}/>,
  'arrow-down': <ArrowDown className={styles["er-icon"]}/>,
  'chevron-left': <ChevronLeft className={styles["er-icon"]}/>,
  'chevron-right': <ChevronRight className={styles["er-icon"]}/>,
  'chevron-up': <ChevronUp className={styles["er-icon"]}/>,
  'chevron-down': <ChevronDown className={styles["er-icon"]}/>,
  'heart': <HeartIcon className={styles["er-icon"]}/>,
  'heart-solid': <HeartSolidIcon className={styles["er-icon"]}/>,
  'book': <BookIcon className={styles["er-icon"]}/>,
  'bars': <BarsIcon className={styles["er-icon"]}/>,
  'bookmark': <BookmarkIcon className={styles["er-icon"]}/>,
  'briefcase': <BriefcaseIcon className={styles["er-icon"]}/>,
  'bug': <BugIcon className={styles["er-icon"]}/>,
  'copy': <CopyIcon className={styles["er-icon"]}/>,
  'circle': <CircleIcon className={styles["er-icon"]}/>,
  'feather': <FeatherIcon className={styles["er-icon"]}/>,
  'hashtag': <HashTag className={styles["er-icon"]}/>,
  'home-lg': <HomeLargeIcon className={styles["er-icon"]}/>,
  'home': <HomeIcon className={styles["er-icon"]}/>,
  'indian-feather': <IndianFeatherIcon className={styles["er-icon"]}/>,
  'paper-plane': <PaperPlaneIcon className={styles["er-icon"]}/>,
  'pen': <PenIcon className={styles["er-icon"]}/>,
  'scroll-old': <ScrollOldIcon className={styles["er-icon"]}/>,
  'tag': <TagIcon className={styles["er-icon"]}/>,
  'tags': <TagsIcon className={styles["er-icon"]}/>,
  'telescope': <TelescopeIcon className={styles["er-icon"]}/>,
  'times': <TimesIcon className={styles["er-icon"]}/>,
  'reddit-alien': <Reddit className={styles["er-icon"]}/>,
  'twitter': <Twitter className={styles["er-icon"]}/>,
  'linkedin': <LinkedIn className={styles["er-icon"]}/>,
  'instagram': <Instagram className={styles["er-icon"]}/>,
  'github': <Github className={styles["er-icon"]}/>,
}

export default icons