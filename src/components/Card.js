export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div class="relative">
      {badgeText && (
        <div class="rounded bg-gray-100 font-bold py-1 px-2 absolute top-20 left-16">
          {badgeText}
        </div>
      )}

      <div class="ml-12 mt-16 text-gray-600 text-lg">
        <img
          src={props.item.coverImg}
          class="rounded-xl mb-2 w-64"
          alt="Katie Zaferes in a swimsuit smiling"
        />
        <p class="flex gap-1 h-5 mb-3">
          <img src="images/star.png" class="mt-1 h-5" alt="red star" />
          {props.item.rating}
          <span class="text-gray-400">
            {props.item.stats.rating} ({props.item.stats.reviewCount}) - USA
          </span>
        </p>
        <p>{props.item.title}</p>
        <p class="mt-1">
          {" "}
          <b class="text-gray-900">From ${props.item.price}</b> / person
        </p>
      </div>
    </div>
  );
}
