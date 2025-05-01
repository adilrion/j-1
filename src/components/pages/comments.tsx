'use client';

import { EllipsisVertical } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { icons } from '../../../public';

// TypeScript interfaces for comments and authors
interface Author {
  name: string;
  initials: string;
}

interface Comment {
  id: number;
  author: Author;
  time: string;
  content: string;
  replies: Comment[];
}

// Initial comments data
const initialComments: Comment[] = [
  {
    id: 1,
    author: { name: 'Alex Mercer', initials: 'AM' },
    time: '14 min',
    content: 'Looking forward to the game! What’s the final player count?',
    replies: [
      {
        id: 2,
        author: { name: 'Rifat Khan', initials: 'RK' },
        time: '14 min',
        content: 'missing few players',
        replies: [],
      },
      {
        id: 3,
        author: { name: 'Rifat Khan', initials: 'RK' },
        time: '14 min',
        content: 'got any friends?',
        replies: [],
      },
    ],
  },
  {
    id: 4,
    author: { name: 'Alex Mercer', initials: 'AM' },
    time: '14 min',
    content: 'Looking forward to the game! What’s the final player count?',
    replies: [],
  },
  {
    id: 5,
    author: { name: 'Alex Mercer', initials: 'AM' },
    time: '14 min',
    content: 'Looking forward to the game! What’s the final player count?',
    replies: [
      {
        id: 6,
        author: { name: 'Rifat Khan', initials: 'RK' },
        time: '14 min',
        content: 'missing few players',
        replies: [],
      },
    ],
  },
];

// Reusable Comment component
const CommentComponent: React.FC<{ comment: Comment; isReply?: boolean }> = ({ comment, isReply = false }) => {
  const bgColor = isReply ? 'bg-[#fde8cd]' : 'bg-[#34735f]';
  const textColor = isReply ? 'text-neutral-900' : 'text-white';
  const headerTextColor = isReply ? 'text-[#34735f]' : 'text-[#fde8cd]';
  const headerIconColor = isReply ? 'text-[#34735f]' : 'text-[#171717]';
  const avatarBg = isReply ? 'bg-[#34735f]' : 'bg-[#fde8cd]';
  const avatarText = isReply ? 'text-[#fde8cd]' : 'text-[#34735f]';

  return (
    <div className={`flex flex-col gap-4 ${isReply ? 'pl-7' : ''}`}>
      <div className={`p-4.5 rounded-2xl ${bgColor} flex flex-col gap-3 w-full`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <div className={`w-10 h-10 flex justify-center items-center ${avatarBg} rounded-full overflow-hidden`}>
              <p className={`text-lg font-bold font-s-bold leading-normal ${avatarText}`}>
                {comment.author.initials}
              </p>
            </div>
            <h4 className={`text-2xl font-medium font-s-medium ${headerTextColor}`}>
              {comment.author.name}
            </h4>
          </div>
          <div className="flex items-center gap-3.5">
            <span className={`text-lg font-normal ${headerTextColor}`}>{comment.time}</span>
            <div className="w-[22px] h-[22px]">
              <EllipsisVertical strokeWidth={1.25} className={`${headerIconColor}`} />
            </div>
          </div>
        </div>
        <p className={`text-xl font-normal ${textColor}`}>{comment.content}</p>
      </div>
      {!isReply && (
        <div className="py-0.5 flex items-center gap-2.5">
          <img src={icons.cornerUpRight.src} alt="Reply" className="w-6 h-6" />
          <span className="text-[#808080] text-lg font-medium">Reply</span>
        </div>
      )}
    </div>
  );
};

// Reusable Reply Thread component
const ReplyThread: React.FC<{ replies: Comment[] }> = ({ replies }) => (
  <div className="relative flex flex-col gap-3 overflow-hidden">
    <div className="absolute left-0 top-0 h-full -ml-[0.1px]">
      <svg width="2" height="100%" className="overflow-visible">
        <line
          x1="1"
          y1="0"
          x2="1"
          y2="100%"
          stroke="#E5E5E5"
          strokeWidth="3.2px"
          strokeDasharray="19.2 19.2"
          strokeLinecap="round"
        />
      </svg>
    </div>
    {replies.map((reply, index) => (
      <CommentComponent key={index} comment={reply} isReply={true} />
    ))}
  </div>
);

// Main Comments component
const Comments: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState<string>('');

  // Handle comment submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const newCommentObj: Comment = {
      id: comments.length + 1,
      author: { name: 'Current User', initials: 'CU' }, // Replace with actual user data
      time: 'Just now',
      content: newComment,
      replies: [],
    };

    setComments([newCommentObj, ...comments]);
    setNewComment('');
  };

  return (
    <div className="w-full mb-10 bg-white rounded-[30px] p-5 flex flex-col gap-10 ">
      <div className="flex flex-col gap-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex flex-col gap-6">
            <CommentComponent comment={comment} />
            {comment.replies.length > 0 && <ReplyThread replies={comment.replies} />}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2.5">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="w-full px-6 py-3 rounded-full  outline-1 outline-[#c0c0c0] flex items-center gap-2.5">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment"
              className="w-full text-[#808080] text-lg font-medium leading-[18px] outline-none bg-transparent"
            />

          </div>
        </form>
      </div>
    </div>
  );
};

export default Comments;