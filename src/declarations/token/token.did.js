export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'checkBalanceOf' : IDL.Func([IDL.Principal], [IDL.Nat], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
