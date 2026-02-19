import { IoSend } from 'react-icons/io5';

function InputBar({ value, onChange, onSend, onKeyDown }) {
  return (
    <div className="border-t border-slate-200 bg-white/95 px-3 py-3 backdrop-blur sm:px-6">
      <div className="mx-auto flex max-w-4xl items-center gap-2 sm:gap-3">
        <input
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder="Type your message (Hindi + English supported)..."
          className="w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-100 sm:text-base"
        />
        <button
          type="button"
          onClick={onSend}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-500 text-white shadow-sm transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
          aria-label="Send message"
        >
          <IoSend size={18} />
        </button>
      </div>
    </div>
  );
}

export default InputBar;
