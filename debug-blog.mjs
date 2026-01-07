import fs from 'fs'
import path from 'path'

// Emulate getBlogPosts logic
const contentDirectory = path.join(process.cwd(), 'content/blog')

try {
    console.log('Content Directory:', contentDirectory)

    if (!fs.existsSync(contentDirectory)) {
        console.error('Directory does not exist!')
    } else {
        const files = fs.readdirSync(contentDirectory)
        console.log('Files in directory:', files)

        files.forEach(file => {
            console.log(`- ${file}`)
            if (file.endsWith('.mdx')) {
                const slug = file.replace('.mdx', '')
                console.log(`  -> Slug: ${slug}`)
            }
        })
    }

} catch (err) {
    console.error('Error:', err)
}
