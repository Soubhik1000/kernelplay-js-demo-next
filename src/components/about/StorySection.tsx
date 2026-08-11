export function AboutHero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          About <span className="gradient-text">KernelPlay.js</span>
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          A passion project born from the desire to make game development accessible,
          educational, and fun for JavaScript developers.
        </p>
      </div>
    </section>
  );
}

export function StorySection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-effect rounded-2xl p-8 sm:p-12 border border-indigo-200 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Story</h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              KernelPlay.js was created with a simple mission: to provide developers with a
              lightweight, intuitive game engine that doesn&apos;t get in the way of creativity.
              Inspired by Unity&apos;s elegant Entity-Component System, it brings familiar
              concepts to the JavaScript ecosystem.
            </p>

            <p>
              The engine started as a learning project to explore game architecture patterns
              and has evolved into a fully-functional framework capable of handling 2D and 3D
              games. With multiple rendering backends, built-in physics, and a clean API,
              KernelPlay.js aims to be the perfect choice for prototyping, learning, and
              building indie games.
            </p>

            <p>
              Now at v0.4.0, the project is actively developed and welcomes contributions from
              the community. Whether you&apos;re a beginner learning game development or an
              experienced developer looking for a lightweight engine, KernelPlay.js has
              something to offer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
