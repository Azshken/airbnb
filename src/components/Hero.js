export default function Hero() {
  return (
    <div>
      <div class="flex justify-center mt-8">
        <img
          src={process.env.PUBLIC_URL + "images/photo-grid.png"}
          class="h-96"
        />
      </div>

      <div class="ml-12 flex-col items-center">
        <h1 class="text-6xl font-bold tracking-tight mt-10">
          Online Experiences
        </h1>
        <p class="w-96 text-2xl text-gray-600 mt-6 ">
          Join unique interactive activities led by one-of-a-kind hosts-all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
