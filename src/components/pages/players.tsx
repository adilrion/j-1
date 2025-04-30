import { icons } from "../../../public";

// Player data
const players = [
  {
    id: 1,
    initials: 'AM',
    name: 'Alex Mercer',
    isHost: true,
  },
  {
    id: 2,
    initials: 'JU',
    name: 'Jamir Uddin',
    isHost: false,
  },
  {
    id: 3,
    initials: 'BA',
    name: 'Biplu Ahmed',
    isHost: false,
  },
  {
    id: 4,
    initials: 'TB',
    name: 'Topu Barman',
    isHost: false,
  },
  {
    id: 5,
    initials: 'RH',
    name: 'Rakib Hossain',
    isHost: false,
  },
];

// Reusable PlayerCard component
const PlayerCard = ({ initials, name, isHost }: {
  initials: string;
  name: string;
  isHost: boolean;
}) => (
  <div className="flex justify-between items-center self-stretch p-3 bg-[#34735f] rounded-[14px] overflow-hidden">
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-[19.2px]">
        <div className="relative w-[45px] h-[45px] bg-[#fde8cd] rounded-full overflow-hidden">
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#34735f] text-lg font-bold font-s-bold">
            {initials}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-[#fde8cd] text-2xl font-medium font-s-medium">
            {name} {isHost && <span className="text-base font-light font-s-light">(Host)</span>}
          </span>
        </div>
      </div>
    </div>
    <div className="px-3 py-4 bg-white rounded-xl flex justify-center items-center">
      <span className="text-neutral-900 text-base font-medium font-s-medium leading-tight">Message</span>
    </div>
  </div>
);

const Players = () => {
  return (
    <div className="flex flex-col gap-6 py-6 w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-neutral-900 text-[32px] font-s-bold leading-7">Players</h2>
        <div className="flex items-center   gap-[8.8px]">
          <img src={icons.peoples.src} className="" />
          <span className="text-neutral-900 text-2xl font-normal font-s-regular">5/11</span>
        </div>
      </div>
      <div className="flex flex-col gap-3 self-stretch">
        {players.map((player) => (
          <PlayerCard
            key={player.id}
            initials={player.initials}
            name={player.name}
            isHost={player.isHost}
          />
        ))}
      </div>
    </div>
  );
};

export default Players;