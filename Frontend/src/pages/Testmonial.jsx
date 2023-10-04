
function Testmonial() {

  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      image: 'john-doe.jpg',
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris lorem, feugiat in vestibulum ac, aliquet nec magna. Fusce finibus leo felis, non elementum massa facilisis id.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      image: 'jane-smith.jpg',
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris lorem, feugiat in vestibulum ac, aliquet nec magna. Fusce finibus leo felis, non elementum massa facilisis id.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      image: 'jane-smith.jpg',
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris lorem, feugiat in vestibulum ac, aliquet nec magna. Fusce finibus leo felis, non elementum massa facilisis id.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      image: 'jane-smith.jpg',
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris lorem, feugiat in vestibulum ac, aliquet nec magna. Fusce finibus leo felis, non elementum massa facilisis id.',
    },
    // Add more testimonials here...
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="bg-white rounded shadow p-4 flex">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-24 h-24 rounded-full mr-4"
          />
          <div>
            <p className="text-gray-700 mb-4">{testimonial.testimonial}</p>
            <p className="text-gray-900 font-semibold">{testimonial.name}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Testmonial