import { useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';
const SearchInput = () => {
  const [search, setSearch] = useState('');
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error('Search must be at least 3 characters long!');
    }
    const conversation = conversations.find((conversation) =>
      conversation.fullname.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch('');
    } else toast.error('No such user found!');
  };
  return (
    <form className='flex items-center gap-2' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Search...'
        className='input-sm md:input input-bordered rounded-full sm:rounded-full w-full'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type='submit'
        className='btn md:btn-md btn-sm btn-circle bg-sky-500 text-white'
      >
        <IoSearchSharp className='w-4 h-4 md:w-6 md:h-6 outline-none' />
      </button>
    </form>
  );
};

export default SearchInput;
