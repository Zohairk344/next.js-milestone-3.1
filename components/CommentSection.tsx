"use client"
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface Comment {
  id: number;
  name: string;
  text: string;
}

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>('');

  const handleAddComment = (): void => {
    if (name.trim() && newComment.trim()) {
      const newCommentObj: Comment = {
        id: comments.length + 1,
        name: name.trim(),
        text: newComment.trim(),
      };

      setComments([...comments, newCommentObj]);
      setNewComment('');
      setName('');
    }
  };

  const handleEdit = (id: number, text: string): void => {
    setEditingId(id);
    setEditText(text);
  };

  const handleSaveEdit = (id: number): void => {
    setComments(
      comments.map((comment) =>
        comment.id === id ? { ...comment, text: editText } : comment
      )
    );
    setEditingId(null);
    setEditText('');
  };

  const handleCancelEdit = (): void => {
    setEditingId(null);
    setEditText('');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-12 poppins ">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Comments</h2>

      {/* Comments List */}
      <ul className="space-y-4 mb-6 ">
        {comments.map((comment) => (
          <li
            key={comment.id}
            className="p-4 bg-gray-100 rounded-lg border border-gray-200 shadow-sm"
          >
            <p className="font-semibold text-blue-600">{comment.name}</p>

            {editingId === comment.id ? (
              <div>
                <textarea
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  rows={2}
                  className="w-full p-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex space-x-2 mt-2">
                  <Button
                    onClick={() => handleSaveEdit(comment.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    Save
                  </Button>
                  <Button
                    onClick={handleCancelEdit}
                    className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex justify-between items-center mt-2 ">
                <p className="text-gray-700">{comment.text}</p>
                <Button
                  onClick={() => handleEdit(comment.id, comment.text)}
                  className="text-white hover:underline text-sm"
                >
                  Edit
                </Button>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Add Comment Form */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-sm ">
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="w-[590px] p-4 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows={3}
          placeholder="Write a comment..."
          className="w-full p-3 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Button
          onClick={handleAddComment}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Comment
        </Button>
      </div>
    </div>
  );
};

export default CommentSection;
