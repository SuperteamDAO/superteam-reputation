// @ts-ignore
export const Tag = {
  components: {
    Tag: {
      variants: {
        custom: (props: { colorScheme: any; theme: any }) => {
          return {
            container: {
              bg: `${props.colorScheme}.900`,
              border: '2px',
              borderColor: 'red.500',
            },
          };
        },
      },
    },
  },
};
