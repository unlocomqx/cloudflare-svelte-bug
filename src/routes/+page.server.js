import postgres from 'postgres';

 const queryClient = postgres('postgres://postgres.zqdukdapfcuxfqcvoohu:MnnIyKLcaUL3HEDK@aws-0-eu-central-1.pooler.supabase.com:5432/postgres', {
    prepare: false,
    debug: true
});

export const load = (async () => {
    const users = await queryClient`SELECT * FROM users`;

    return {
        users
    }
});