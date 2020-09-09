# boot-next / Sections

In here you should define page specific or even globally available sections. If e.g. you want to define a section, which is only available for a certain page, your structure should look as followed:

```bash
sections
└── home
    └── AwesomeSection.tsx
```

If you decide to seperate your section specific styles and types from the single-file logic, the name of the section becomes the folder name, which will then look like this:

```bash
sections
└── home
    └── AwesomeSection
        ├── index.tsx
        ├── styles.ts
        └── types.ts
```

In your `.tsx` file the file should be defined as followed:

```tsx
import React from 'react'

const HomeAwesomeSection = () => {
  return (
    <div>
      ...
    </div>
  )
}

export default HomeAwesomeSection
```

The namespace used for the `export default` should always prepend the name of the folder, so the auto-import feature works without having to go through a lot of sections that have the same name.